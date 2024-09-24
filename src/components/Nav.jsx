const Nav = ({ searchMovies, searchTerm, setSearchTerm }) => {
  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Nav;
