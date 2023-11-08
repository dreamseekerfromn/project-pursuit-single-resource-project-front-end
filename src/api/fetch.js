export async function getAllMessages() {
    return await fetch(`${URL}/forums`).then((res) => {
        console.log(res);
        return res.json();
    });
}

