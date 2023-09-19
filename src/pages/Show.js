
import { Link, useLoaderData, Form} from "react-router-dom"

function Show(props){
    const post = useLoaderData()
    const handleUpdateClick=()=>{
      alert('cheese updated')
    }
   const handleDeleteClick=(event)=>{
      var result = window.confirm("Are you sure you want to delete this item?")
      if (result){
        // document.querySelector('form').submit()
        alert('cheese deleted')
      }
      else{
        event.preventDefault()

      }

   }

    return (
      <div>
        <h1 style={{color:"#fff", backgroundColor:"purple"}}>Cheese information</h1>
        <h1>{post.name}</h1>
        <h2>{post.country}</h2>

        <div>
          <Form method="post" action={`/update/${post.id}`}>
            <input
              type="name"
              name="name"
              placeholder="chesse name"
              defaultValue={post.name}
            />
            <input
              type="country"
              name="country"
              placeholder="Country of origin"
              defaultValue={post.country}
            />
            <input
              type="type"
              name="type"
              placeholder="type of cheese"
              defaultValue={post.type}
            />
            <div>
              <button onClick={handleUpdateClick}> Update a cheese</button>
            </div>
          </Form>
        </div>
        <Form method="post" action={`/delete/${post.id}`}>
          <button onClick={handleDeleteClick}>Delete cheese</button>
        </Form>
        <button>
          <Link to="/" style={{color:"#fff"}}>back to Home</Link>{" "}
        </button>
      </div>
    );
}
export default Show