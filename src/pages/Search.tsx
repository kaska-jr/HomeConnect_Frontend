import SearchProperties from '../components/Search/SearchProperties'
import SearchForm from '../components/Search/SearchForm'
import PropertiesNavbar from "../components/PropertiesNavbar"

const Search = () => {
  return (
    <div className='flex flex-col'>
        <PropertiesNavbar />
           <div className='flex flex-row p-12 justify-evenly'>
        <SearchProperties />
        <SearchForm />
    </div>
    </div>
 
  )
}

export default Search;