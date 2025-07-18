const alertMsg = 'Open Console (F12 or RCM -> inspect)';

alert(alertMsg);

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addPost() {
    try {
        const title = document.querySelector('.post-title').value;
        const body = document.querySelector('.post-body').value;
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        const data = await response.json();
        console.log('Завантаження... ⏳');
        await wait(1000);
        console.log(`ID: ${data.id} 😎`);
        await wait(1000);
        console.log(`Title: ${data.title} 😜`);
        await wait(1000);
        console.log(`Body: ${data.body} 🤐`);
    }
    catch (error) {
        console.error('Error catched! 😡');
    }
}