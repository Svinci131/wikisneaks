//move to secret
var CLIENT_ID = "h9dEBWgcaMiMgae_vAMgL0iTl8HkKnDE_5gfBFe7"
var CLIENT_SECRET = "UZbIKernZXiTG7xCoZ3wbN-w13DJRkopcPpEgBb9"

function getCredentials() {
  var data = {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET
  };
  var url = 'https://api.clarifai.com/v1/token';

  return axios.post(url, data, {
    'transformRequest': [
      function() {
        return transformDataToParams(data);
      }
    ]
  }).then(function(r) {
    localStorage.setItem('accessToken', r.data.access_token);
    localStorage.setItem('tokenTimestamp', Math.floor(Date.now() / 1000));
  }, function(err) {
    console.log(err);
  });
}

function transformDataToParams(data) {
  var str = [];
  for (var p in data) {
    if (data.hasOwnProperty(p) && data[p]) {
      if (typeof data[p] === 'string'){
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
      }
      if (typeof data[p] === 'object'){
        for (var i in data[p]) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p][i]));
        }
      }
    }
  }
  return str.join('&');
}

function getSimilarImages () {
  var accessToken = localStorage.getItem('accessToken');
  var url = "https://api2-prod.clarifai.com/v2/searches"

  var data = {
    "query": {
      "stanzas": [
        {
          "data": {
            "tags": [
              {
                "concept": {
                  "name": "dog"
                },
                "value": false
              },
              {
                "concept": {
                  "name":"portrait"
                },
                "value":true
              }
            ]
          }
        }
      ]
    }
  }

  axios.post(url, data, {
    'headers': {
      'Authorization': 'Bearer ' + accessToken,
      'content-type':'application/json'
    }
    /*'content-type': 'application/x-www-form-urlencoded'*/
  }).then(function(r) {
    console.log(r.data)
  });



}

function postImage(imgurl) {
  var accessToken = localStorage.getItem('accessToken');
  var data = {
    'url': imgurl
  };
  var url = 'https://api.clarifai.com/v1/tag';
  return axios.post(url, data, {
    'headers': {
      'Authorization': 'Bearer ' + accessToken
    }
    /*'content-type': 'application/x-www-form-urlencoded'*/
  }).then(function(r) {
    return parseResponse(r.data);
  }, function(err) {
    console.log('Sorry, something is wrong: ' + err);
  });
}

function parseResponse(resp) {
  var tags = [];
  if (resp.status_code === 'OK') {
    var results = resp.results;
    console.log("whole result ", results);
    tags = results[0].result.tag.classes;
  } else {
    console.log('Sorry, something is wrong.');
  }
  console.log("here", tags)
  // tags.toString().replace(/,/g, ', ');
  // document.getElementById('tags').innerHTML = tags.toString().replace(/,/g, ', ');
  return tags;
}

function run(imgurl) {
  if (Math.floor(Date.now() / 1000) - localStorage.getItem('tokenTimeStamp') > 86400
    || localStorage.getItem('accessToken') === null) {
    getCredentials(function() {
      postImage(imgurl);
    });
  } else {
    postImage(imgurl);
  }
}
