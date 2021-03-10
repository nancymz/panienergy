export function getUserPrefs (){
    return fetch('http://localhost:3001/get')
      .then(data => data.json())
  }