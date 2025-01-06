"use strict";

let number = 0;
const bbs = document.querySelector('#bbs');
document.querySelector('#post').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const timestamp = new Date().toISOString();

    const params = {  // URL Encode
        method: "POST",
        body:  `name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}&timestamp=${encodeURIComponent(timestamp)}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    fetch("/post", params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        document.querySelector('#message').value = "";
    });
});

document.querySelector('#check').addEventListener('click', () => {
    const params = {
        method: "POST",
        body: '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    fetch("/check", params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        let value = response.number;
        if (number !== value) {
            const params = {
                method: "POST",
                body: `start=${number}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            fetch("/read", params)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then((response) => {
                number += response.messages.length;
                for (let i = 0; i < response.messages.length; i++) {
                    const mes = response.messages[i];
                    const index = number - response.messages.length + i + 1;

                    let cover = document.createElement('div');
                    cover.className = 'cover';

                    let number_area = document.createElement('span');
                    number_area.className = 'number';
                    number_area.innerText = `#${index}`;

                    let name_area = document.createElement('span');
                    name_area.className = 'name';
                    name_area.innerText = mes.name;

                    let mes_area = document.createElement('span');
                    mes_area.className = 'mes';
                    mes_area.innerText = mes.message;

                    let timestamp_area = document.createElement('span');
                    timestamp_area.className = 'timestamp';
                    timestamp_area.innerText = new Date(mes.timestamp).toLocaleString();

                    let delete_button = document.createElement('button');
                    delete_button.className = 'delete';
                    delete_button.innerText = '削除';
                    delete_button.addEventListener('click', () => {
                        const deleteParams = {
                            method: "POST",
                            body: `id=${mes.id}`,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        };
                        fetch("/delete", deleteParams)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Error');
                            }
                            return response.json();
                        })
                        .then((response) => {
                            if (response.success) {
                                bbs.removeChild(cover);
                            }
                        });
                    });

                    cover.appendChild(number_area);
                    cover.appendChild(name_area);
                    cover.appendChild(mes_area);
                    cover.appendChild(timestamp_area);
                    cover.appendChild(delete_button);
                    bbs.appendChild(cover);
                }
            });
        }
    });
});