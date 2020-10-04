import React, { Component } from 'react';
import '../css/Item_List.css';

class Item_List extends Component {
    state = {
        items: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/item');
            const items = await res.json();
            this.setState({
                items
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div class="ItemList">
              <div class = "i-nav">
              SHOP <hr class="line"/>
            </div>
              <div><h1>SHOP</h1></div>
                {this.state.items.map(item => (
                    <div key={item.id} class="lists">
                        <h1>{item.name}</h1>
                        <span><img src={item.photo} /></span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Item_List;
