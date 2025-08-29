export default async function bookSearch() {
    let data: any;
    const response = await fetch('https://openlibrary.org/search.json?title=cloud+cuckoo+land');
    if (response.ok) {
        data = await response.json();
        const newData = data.docs;
        return newData;
    } else {
        throw new Error('Could not get books');
    }
}