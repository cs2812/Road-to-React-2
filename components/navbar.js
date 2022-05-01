let navbar=()=>{
    return`
    <div id="search_bar">
            <input type="text" id="query">
     <label class="l">Sort</label>
    <select name="" id="sort">
        <option value="">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
        <option value="views">Views</option>
        <option value="downloads">Downloads</option>
    </select>
    <label class="l">Filter</label>
    <select name="" id="filter">
        <option value="">---</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="squarish">Squarish</option>
    </select>
        </div>
        <div id="categories">
            <h3 id=nature>Nature</h3>
            <h3 id=car>Cars</h3>
            <h3 id=music>Music</h3>
            <h3 id=cartoon>Cartoons</h3>
            <h3 id=technolog>Technology</h3>
            <h3 id=marvel>Marvel</h3>
        </div>
    `
};
export {navbar}