async function PostDetail(id) {
    const response = await fetch(`https://admin.just.edu.so/wp-json/wp/v2/posts/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export default async function Page({ params }) {
    const { id } = params;
    let Posts;

    try {
        Posts = await PostDetail(id);
    } catch (error) {
        console.error('Failed to fetch post details:', error);
        return (
            <div>
                <h1>Failed to load post</h1>
            </div>
        );
    }

    // Ensure Posts object is valid and contains the necessary data
    if (!Posts || !Posts.title || !Posts.title.rendered) {
        return (
            <div>
                <h1>Post not found</h1>
            </div>
        );
    }
    return (
        <div className="p-8">
            <h1 className=" text-xl font-semibold pb-4" dangerouslySetInnerHTML={{__html:Posts.title.rendered}}></h1>
            <p dangerouslySetInnerHTML={{__html:Posts.content.rendered}}></p>
        </div>
    );
}
