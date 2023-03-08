import React from "react";
import recipe1 from "../assets/images/recipe-1.jpeg";
import recipe2 from "../assets/images/recipe-2.jpeg";
import recipe3 from "../assets/images/recipe-3.jpeg";
import recipe4 from "../assets/images/recipe-4.jpeg";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <Container>
      <header>
        <nav>
          <a href="#">Recipes</a>
          <a href="#">Collection</a>
        </nav>
      </header>

      <main>
        <section className="search_section">
          <input
            className="search_field"
            type="text"
            placeholder="Search for a recipe"
          />
          <button className="search_btn">Search</button>
        </section>

        <section className="hero">
          <h1>Recipe App</h1>
          <p>Find the best recipes for your favorite dishes</p>
        </section>

        <section className="recipe_section">
          <div className="recipe">
            <img src={recipe1} width="190px" alt="" />
            <h2>Avocado, and Tomato Salad</h2>
            <p>dona's Kitchen</p>
          </div>

          <div className="recipe">
            <img src={recipe2} width="190px" alt="" />
            <h2>Chickpea & Butternut Squash Salad</h2>
            <p>Tasty Treat</p>
          </div>

          <div className="recipe">
            <img src={recipe3} width="190px" alt="" />
            <h2>Spicy Chicken & Salad</h2>
            <p>Yummy Foods</p>
          </div>

          <div className="recipe">
            <img src={recipe4} width="190px" alt="" />
            <h2>Chips, Avocado Creamy Sauce</h2>
            <p>Ella Olsson</p>
          </div>
        </section>
      </main>

      <footer>
        <p>Recipe App &copy; 2023</p>
      </footer>
    </Container>
  );
}
