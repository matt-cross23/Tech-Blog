
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const postTopic = document.querySelector('#post-topic').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (name && postTopic && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ name, postTopic, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
   
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

// const updateHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
   
//     const id = event.target.getAttribute('data-id');
//     const response = await fetch(`/api/post/${id}`, {
//       method: 'PATCH',
//     });
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to update post');
//     }
//   }
// };

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);

// document 
// .querySelector('.update')
// .addEventListener('click', updateHandler);
