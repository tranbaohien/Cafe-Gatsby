import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe labore officia fugiat tenetur corrupti maxime aliquam. Corrupti suscipit blanditiis tempora, voluptatem dolores temporibus eligendi natus velit odit corporis voluptatibus adipisci delectus deleniti explicabo rem nihil fugiat eveniet cumque deserunt ut, culpa numquam? Obcaecati incidunt aliquid iure facere earum recusandae in pariatur culpa unde accusantium, doloribus perspiciatis quas, animi error nemo minima, tempora consectetur quibusdam. Iusto saepe dolore consequuntur distinctio id vitae placeat delectus sequi, aliquid architecto consequatur nemo fuga assumenda sunt recusandae mollitia a expedita provident aliquam? Error dolorum voluptatem iste neque quia possimus nemo sint vero est placeat.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                About Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
