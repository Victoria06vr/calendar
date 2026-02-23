export default function SearchField({handleinput, filter}) {

    return (
        <input type="search" placeholder="Type to search..." value={filter} onChange={handleinput} /> 
    )
    
}