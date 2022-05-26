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
                <h1>Ans: There are four types of state that should manage properly in react apps.

                    1.Local state - Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.

                    2.Global state - Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    3.Server state - Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    4.URL state - Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                </h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q3: How does prototypical inheritance work?</h2>
                <h1>Ans: Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a core feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <h1>Ans: React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly.And this is why we write this way.</h1>
            </div>

            <div className='card shadow-xl p-6 m-6'>
                <h2>Q5: What is a unit test? Why should write unit tests?</h2>
                <h1>Ans: unit testing is nothing but a test of small part of an application.This test happen to ensure the quality of an application an it is done by software engineers.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</h1>
            </div>
        </div>
    );
};

export default Blog;