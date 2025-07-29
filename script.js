// Calorie data for a wide variety of ingredients (per 100g or equivalent for liquids)
const ingredientCalorieData = {
    // Flours
    "wheat flour": { calories: 364, image: "https://upload.wikimedia.org/wikipedia/commons/4/49/White_Wheat_Flour.jpg" },
    "whole wheat flour": { calories: 340, image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Whole_Wheat_Flour.jpg" },
    "maida": { calories: 364, image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Maida.jpg" },
    "rice flour": { calories: 366, image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Rice_flour.jpg" },
    "corn flour": { calories: 365, image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Corn_flour.jpg" },
    "gram flour": { calories: 387, image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Besan.jpg" },
    "sorghum flour": { calories: 340, image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sorghum_flour.jpg" },
    "millet flour": { calories: 378, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Millet.jpg" },
    "oat flour": { calories: 389, image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Oat_Flour.jpg" },
    "almond flour": { calories: 575, image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Almond_Flour.jpg" },

    // Oils
    "olive oil": { calories: 884, image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Olive_Oil_in_a_bottle.jpg" },
    "coconut oil": { calories: 862, image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Coconut_oil.jpg" },
    "sunflower oil": { calories: 884, image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sunflower_oil.jpg" },
    "mustard oil": { calories: 884, image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mustard_oil.jpg" },
    "ghee": { calories: 900, image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ghee_in_a_bowl.jpg" },
    "sesame oil": { calories: 884, image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sesame_oil.jpg" },

    // Pastes & Sauces
    "ginger paste": { calories: 200, image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ginger_paste.jpg" },
    "garlic paste": { calories: 150, image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Garlic_paste.jpg" },
    "tomato paste": { calories: 82, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tomato_paste.jpg" },
    "tamarind paste": { calories: 287, image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tamarind_paste.jpg" },
    "soy sauce": { calories: 53, image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Soy_sauce.jpg" },
    "curry paste": { calories: 100, image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Curry_paste.jpg" },

    // Vegetables
    "carrot": { calories: 41, image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Carrots.jpg" },
    "broccoli": { calories: 34, image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Broccoli.jpg" },
    "spinach": { calories: 23, image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Spinach.jpg" },
    "potato": { calories: 77, image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Potatoes.jpg" },
    "tomato": { calories: 18, image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tomatoes.jpg" },
    "onion": { calories: 40, image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Onions.jpg" },
    "bell pepper": { calories: 20, image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Bell_pepper.jpg" },
    "cauliflower": { calories: 25, image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Cauliflower.jpg" },
    "peas": { calories: 81, image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Green_peas.jpg" },
    "cucumber": { calories: 16, image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Cucumber.jpg" },

    // Spices
    "cumin": { calories: 375, image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cumin_seeds.jpg" },
    "coriander": { calories: 298, image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Coriander_seeds.jpg" },
    "turmeric": { calories: 312, image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Turmeric_roots.jpg" },
    "black pepper": { calories: 255, image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Black_peppercorns.jpg" },
    "red chili powder": { calories: 282, image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Red_chili_powder.jpg" },
    "garam masala": { calories: 350, image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Garam_masala.jpg" },
    "mustard seeds": { calories: 508, image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mustard_seeds.jpg" },
    "cinnamon": { calories: 247, image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cinnamon_sticks.jpg" },
    "cardamom": { calories: 311, image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Cardamom_pods.jpg" },
    "cloves": { calories: 274, image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Cloves.jpg" },
    "asafoetida": { calories: 295, image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Asafetida_powder.jpg" },
    
    // Masalas
    "chaat masala": { calories: 200, image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Chaat_masala.jpg" },
    "pav bhaji masala": { calories: 300, image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Pav_bhaji_masala.jpg" },

    // Meats
    "chicken": { calories: 239, image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Raw_chicken.jpg" },
    "beef": { calories: 250, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Raw_beef.jpg" },
    "mutton": { calories: 294, image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Raw_mutton.jpg" },
    "pork": { calories: 263, image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Raw_pork.jpg" },
    "fish": { calories: 206, image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Raw_fish.jpg" },
    
    // Fruits (optional, for completeness)
    "banana": { calories: 89, image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Banana.jpg" },
    "apple": { calories: 52, image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Apple.jpg" },
    "orange": { calories: 47, image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Orange.jpg" },
    "grape": { calories: 69, image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Grapes.jpg" },
};

// Conversion factors for units
const unitConversionFactors = {
    "grams": 1,
    "milligrams": 0.001,
    "kilograms": 1000,
    "litres": 1000,
    "millilitres": 1,
    "gallons": 3785.41
};

// Function to add a new ingredient slot
function addIngredientSlot() {
    const ingredientContainer = document.getElementById("ingredient-container");
    const ingredientEntry = document.createElement("div");
    ingredientEntry.className = "ingredient-entry";
    ingredientEntry.innerHTML = `
        <input type="text" class="ingredient-name" placeholder="Ingredient Name" onblur="updateImage(this)">
        <input type="number" class="ingredient-quantity" placeholder="Quantity">
        <select class="ingredient-unit">
            <option value="grams">Grams (g)</option>
            <option value="milligrams">Milligrams (mg)</option>
            <option value="kilograms">Kilograms (kg)</option>
            <option value="litres">Litres (L)</option>
            <option value="millilitres">Millilitres (mL)</option>
            <option value="gallons">Gallons</option>
        </select>
        <img class="ingredient-image" src="" alt="Ingredient Image">
    `;
    ingredientContainer.appendChild(ingredientEntry);
}

// Update ingredient image
function updateImage(input) {
    const ingredient = input.value.toLowerCase();
    const imgElement = input.nextElementSibling.nextElementSibling;
    if (ingredientCalorieData[ingredient]) {
        imgElement.src = ingredientCalorieData[ingredient].image;
        imgElement.style.display = 'inline';
    } else {
        imgElement.style.display = 'none';
    }
}

// Calculate total calories
function calculateTotalCalories() {
    const ingredientEntries = document.querySelectorAll(".ingredient-entry");
    let totalCalories = 0;
    const dishName = document.getElementById("dish-name").value || "Unnamed Dish";

    ingredientEntries.forEach(entry => {
        const name = entry.querySelector(".ingredient-name").value.toLowerCase();
        const quantity = parseFloat(entry.querySelector(".ingredient-quantity").value);
        const unit = entry.querySelector(".ingredient-unit").value;

        if (ingredientCalorieData[name] && !isNaN(quantity)) {
            const conversionFactor = unitConversionFactors[unit];
            const quantityInGrams = quantity * conversionFactor;
            const caloriesPer100g = ingredientCalorieData[name].calories;
            const caloriesForGivenAmount = (caloriesPer100g / 100) * quantityInGrams;
            totalCalories += caloriesForGivenAmount;
        }
    });

    document.getElementById("total-calories").innerText = `${dishName}: Total Calories - ${totalCalories.toFixed(2)} kcal`;
}
