import React, { Component } from 'react'
import Title from '../Globals/Title';
import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category
    })
    let tempCategories = new Set (tempItems)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    return categories
}
export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }
    handleItems = (category) => {
        let tempItems = [...this.state.items]
        if(category === "all"){
            this.setState(()=>{
                return {coffeeItems:tempItems}
            })
        }
        else {
            let items = tempItems.filter(({node})=>node.category===category)
            this.setState(()=>{
                return {coffeeItems:items}
            })
        }
    }
    render() {
        if(this.state.items.length>0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu"/>
                        <div className="row mb-5">
                            <div className="col-12 mx-auto text-center">
                                {this.state.categories.map((category,index) => {
                                    return (
                                        <button type="button" key={index}
                                         className="btn text-capitalize btn-yellow m-3"
                                         onClick={() => this.handleItems(category)}>
                                            {category}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="row">
                            {this.state.coffeeItems.map(({node}) => {
                                return(
                                    <div key={node.id} className="col-11 col-md-6 my-3">
                                        <div className="row">
                                            <div className="col-md-2 col-3 text-center">
                                                <Img fixed={node.image.fixed} />
                                            </div>
                                            <div className="content-block col-md-10 col-9">
                                                <div className="row">
                                                    <h5 className="title col-md-8 col-lg-9">{node.title}</h5>
                                                    <h5 className="price text-yellow font-weight-bold col-md-2 col-lg-2">${node.price}</h5>
                                                </div>
                                                <div className="description-block">
                                                    <p className="description text-muted">
                                                        {node.description.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>                                        
                                    </div>  
                                )
                            })}
                            <div className="col-10 col-sm-6 mx-auto
                             text-center text-capitalize">
                                
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu"/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto
                             text-center text-capitalize">
                                 <h1>There are no items to display!</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
