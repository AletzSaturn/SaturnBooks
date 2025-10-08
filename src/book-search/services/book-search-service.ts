export default async function bookSearch(searchTerm: string) {

    const bookSearch: string = searchTerm.replace(' ', '+');
    let data: any;
    if (bookSearch) {
        const response = await fetch(`https://openlibrary.org/search.json?title=${bookSearch}`);
        if (response.ok) {
            data = await response.json();
            console.log(data)
            const newData = data.docs.slice(0, 10);
            const foundBooks = newData.map((element: any) => {
                return {
                    title: element.title,
                    author: element.author_name[0],
                    publishedYear: element.first_publish_year,
                    coverURL: `https://covers.openlibrary.org/b/olid/${element.cover_edition_key}-M.jpg`
                }
            })
            return foundBooks;
        } else {
            throw new Error('Could not get books');
        }
    } else {
        throw new Error('Could not get books');
    }

}