const Search = ({posts, setPosts}) => {

    const handleFilter = (e) => {
        console.log(e.target.value);
        const filteredPosts = posts.filter((post) => post.size === e.target.value);
        setPosts(filteredPosts);
      };
      
      const handleSearch = (e) => {
        console.log(e.target.value);
        const filteredPosts = posts.filter((post) => post.title === e.target.value);
        setPosts(filteredPosts);
      };
    return ( 
        <>
        <div className="search">
      <label htmlFor="search">Recherche :</label>
      <input type="text" name="search" id="search" onChange={handleSearch}/>
    </div>
    

    <div className="filter">
      <label htmlFor="size">Taille :</label>
      <select name="size" id="size" onChange={handleFilter}>
        <option value="0">Toutes les tailles</option>
        <option value="150">150 cm</option>
        <option value="160">160 cm</option>
        <option value="170">170 cm</option>
        <option value="180">180 cm</option>
        <option value="190">190 cm</option>
        <option value="200">200 cm</option>
      </select>
    </div>
        </>
     );
}
 
export default Search;