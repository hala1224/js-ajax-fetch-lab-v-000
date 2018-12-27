function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  const token = ' 53d3206d9ceefa1c8e3b50178179519485e9a3f1';
 
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').append(`<h3>Fork:</h3><a href="${json.html_url}"> ${json.html_url}</a> - ${json.name}`);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  const token = ' 53d3206d9ceefa1c8e3b50178179519485e9a3f1';
 
  return '';
}