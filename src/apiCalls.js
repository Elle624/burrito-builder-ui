export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders').then((response) =>
    response.json()
  );
};

export const addOrder = (data) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        'Sorry we are having difficulty processing this request, please try again later!'
      );
    }
  });
};
