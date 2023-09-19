import Post from '../components/Post'
import { useLoaderData, Form } from 'react-router-dom'

function Index(props){
    const cheeses = useLoaderData()

    return (
      <>
        <div className="all-acontainer">
          <h2 style={{ color: "#FFF", backgroundColor: "purple" }}>
            Enter new cheese
          </h2>
          <Form method="post" action="/create">
            <input type="name" name="name" placeholder="chesse name" />
            <input
              type="country"
              name="country"
              placeholder="Country of origin"
            />
            <input type="type" name="type" placeholder="type of cheese" />
            <div>
              <button> Create a new cheese</button>
            </div>
          </Form>
        </div>
        <h2 style={{ color: "#FFF", backgroundColor: "purple" }}>
          List of cheeses
        </h2>
        {cheeses.map((cheese) => (
          <Post key={cheese.id} post={cheese} />
        ))}
      </>
    );
}
export default Index