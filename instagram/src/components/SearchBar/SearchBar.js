import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        // this.state = {
        //     search: ''
        // };
      }
// changeHandler = (e) =>{
//   this.setState({ search: e.target.value })
// }
    render() {
      return (
        <div className='searchBar'>
            <div className='searchLeft'>
                <i class="fab fa-instagram fa-lg"></i>
                <img src="/instagram.png" alt="Instagram" width='100px' className='logo'></img>
            </div>
            <input type='text' placeholder='search here' className='bar' onChange={this.props.searchHandler} />
            <div className='searchRight'>
                <i class="far fa-compass fa-lg compass"></i>
                <i class="far fa-heart fa-lg topHeart"></i>
                <i class="far fa-user fa-lg userIcon"></i>
            </div>
        </div>
      );
    }
  }
  
  export default SearchBar;

// function SearchBar (props) {
//     return (
//         <div className='searchBar'>
//             <div className='searchLeft'>
//                 <i class="fab fa-instagram fa-lg"></i>
//                 <img src="/instagram.png" alt="Instagram" width='100px' className='logo'></img>
//             </div>
//             <input type='text' placeholder='search here' className='bar' />
//             <div className='searchRight'>
//                 <i class="far fa-compass fa-lg compass"></i>
//                 <i class="far fa-heart fa-lg topHeart"></i>
//                 <i class="far fa-user fa-lg userIcon"></i>
//             </div>
//         </div>
//     );
// };

// export default SearchBar;