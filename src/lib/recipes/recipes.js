
export let RecipesTags = {
    "végé": {"icon": "fa-solid fa-seedling", "color": "#339e38"},
    "fast-food": {"icon": "fa-solid fa-burger", "color": "#e6cd53"},
    "snack": {"icon": "fa-solid fa-cookie-bite", "color": "#ffba70"},
    "salé": {"icon": "fa-solid fa-utensils", "color": "#75edfa"},
}


export let Recipes = [
    {
        "id": 0,
        "name": "Pizza",
        "ingredients": [
            ["Sauce tomate", "100g"],
            ["Oignons", "50g"],
            ["Farine", "200g"],
            ["Fromage", "150g"],
        ],
        "steps":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
        "tags": ["fast-food", "salé"],
        "rating": 5,
        "time": 30,
        "portions": 6,
        "tools": ["four"],
        "image": "pizza.jpg"
    },
    {
        "id": 1,
        "name": "Butter chicken / tofu",
        "ingredients": [
            ["Poulet / Tofu", "500g"],
            ["Chili", "1.5 tbps"],
            ["Cumin", "0.5 tsp"],
            ["Coriandre", "0.5 tsp"],
            ["Curcuma", "0.5 tsp"],
            ["Garam masala", "0.5 tsp"],
            ["Ail", "1 tsp"],
            ["Gingembre", "1 tsp"],
            ["Jus de citron", "0.5"],
            ["Beurre", "2 tbsp"],
            ["Oignon", "1"],
            ["Tomates", "3"],
            ["Noix de cajou", "30aine"],
            ["Eau", "0.5 cup"]
        ],
        "steps":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
        "time": 30,
        "portions": 6,
        "tools": ["poelle", "blender"],
        "tags": ["végé"],
        "rating": 3,
        "image": "butter_tofu.jpg"
    },
    {
        "id": 2,
        "name": "Poutine maison",
        "ingredients": [
            ["Ail", "-"],
            ["Echalottes", "-"],
            ["Paprika ", "-"],
            ["Bouillon de légume", "-"],
            ["Sauce huître", "-"],
            ["Sirop d'érable", "-"],
            ["Concentré de tomate", "-"],
            ["Fécule de maïs", "-"],
            ["Balsamique ", "-"],
            ["Balsamique ", "-"],
            ["Fumée liquide ", "(quelques goûtes max)"],
            ["Champignons", "-"],
            ["Oignons", "-"],
            ["Pommes de terre", "-"],

        ],
        "steps":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
        "time": 60,
        "portions": 6,
        "tools": ["four"],
        "tags": ["fast-food", "végé"],
        "rating": 2,
        "image": "poutine.jpg"
    },
    {
        "id": 3,
        "name": "Cookie dough whey",
        "ingredients": [
            ["Whey", "50g"],
            ["Beurre de cacahuètes", "50g"],
            ["Poudre d'amande", "60g"],
            ["Eau", "(un peu)"],
        ],
        "steps":[
            "Tout mélanger, ajouter de l'eau jusqu'à obtenir la bonne texture"
        ],
        "time": 5,
        "tags": ["snack"],
        "portions": 2,
        "rating": 5,
        "image": "poutine.jpg"
    },
    {
        "id": 4,
        "name": "Wrap tofu",
        "ingredients": [
            ["Tortillas", "2"],
            ["Tofu", "200g"],
            ["Haricots rouges", "100g"],
            ["Avocat", "1"],
            ["Cheddar râpé", "30g"],
        ],
        "steps":[
            "Tout mélanger"
        ],
        "time": 5,
        "tags": ["végé"],
        "portions": 2,
        "rating": 5,
        "tools": ["air-fryer"],
        "image": "poutine.jpg"
    },
    {
        "id": 5,
        "name": "Bourguignon de champignons et purée",
        "ingredients": [
            ["Pommes de terres", "-"],
            ["Champignons", "-"],
            ["Carottes", "-"],
            ["Oignons", "-"],
            ["Vin rouge", "-"],
        ],
        "steps":[
            "Tout mélanger"
        ],
        "time": 5,
        "tags": ["végé"],
        "portions": 2,
        "rating": 5,
        "tools": ["Casserole"],
        "image": "bourguignong_champi.jpg"
    },
    
]