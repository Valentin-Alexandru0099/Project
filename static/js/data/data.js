export const dataHandler = {
    getStats: async function (){
        const response = await apiGet("/api/getStats");
        return response;
    },
    getRaces: async function (){
      const response = await apiGet("/api/getRaces");
      return response;
    },
    pickRace: async function(data){
      const response = await apiPut("/api/pickRace", data);
      return response;
    },
}


  async function apiGet(url) {
    let response = await fetch(url, {
      method: "GET",
    });
    if (response.status === 200) {
      let data = await response.json();
      return data;
    }
  }


  async function apiPost(url, payload) {
    let response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  }
  
  
  async function apiDelete(url, payload) {
    let response = await fetch(url, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
}


  async function apiPut(url, payload) {
    let response = await fetch(url, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  }
  
  
  