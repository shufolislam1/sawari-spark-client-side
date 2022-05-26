import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q1: How will you improve the performance of a React Application?</h2>
                <h1>Ans: i have to create component state local where necessary and memorize react components to prevent unnecessary re-render.Also i can stop lazy loadnig images in react.There are many ways to improve the performance of react app.</h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q2:  What are the different ways to manage a state in a React application?</h2>
                <h1>Ans: </h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q3: How does prototypical inheritance work?</h2>
                <h1>Ans: </h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <h1>Ans: </h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q5: What is a unit test? Why should write unit tests?</h2>
                <h1>Ans: </h1>
            </div>
        </div>
    );
};

export default Blog;