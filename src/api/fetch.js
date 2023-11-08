const URL = import.meta.env.VITE_APP_API_URL;

export async function getAllMessages() {
    return await fetch(`${URL}/posts`).then((res) => {
        console.log(res);
        return res.json();
    });
}

// index/Get one
export async function getSingleSong(id) {
    return await fetch(`${URL}/posts/${id}`).then((res) => res.json());
}

// Create
export async function createSong(item) {
    return await fetch(`${URL}/posts/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}

// Update
export async function updateSong(id, item) {
    return await fetch(`${URL}/posts/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}

// Delete
export async function destroySong(id) {
    return await fetch(`${URL}/posts/${id}`, {
        method: "DELETE",
    });
}
