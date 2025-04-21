CREATE TABLE IF NOT EXISTS Recipe (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    steps TEXT NOT NULL,
    tags TEXT NOT NULL,
    rating INTEGER,
    preptime INTEGER,
    cooktime INTEGER,
    portions INTEGER,
    tools TEXT NOT NULL,
    image TEXT,
    createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    calories INTEGER,
    proteins INTEGER,
    carbs INTEGER,
    fats INTEGER,
    source TEXT
);
INSERT INTO Recipe VALUES(4,'Pizza base yaourt grec','[{"name":"Sauce tomate","quantity":"60","unit":"g"},{"name":"Yaourt grec","quantity":"120","unit":"g"},{"name":"Farine","quantity":"100","unit":"g"},{"name":"Levure","quantity":"0","unit":"un peu"},{"name":"Mozza râpée","quantity":"30","unit":"g"},{"name":"Pepperonis","quantity":"50","unit":"g"}]','Mélanger la pate et laisser reposer 20 minutes\r\nFaire cuire la pâte séparemment avec la moitié de la sauce tomate pendant 10 min\r\nAjouter le reste des ingrédients et cuire jusqu''à ce que le dessous de la pâte soit bien cuît','végé,fast-food',5,20,0,1,'','pizza.jpg',TO_TIMESTAMP(1745173586795/1000),761,33,98,26,NULL);
INSERT INTO Recipe VALUES(5,'Butter chicken / tofu','[{"name":"Poulet ou tofu","quantity":"500","unit":"g"},{"name":"Chili","quantity":"2","unit":"tbsp"},{"name":"Jus de citron","quantity":"1","unit":" "},{"name":"Beurre","quantity":"20","unit":"g"},{"name":"Oignon","quantity":"2","unit":" "},{"name":"Tomates","quantity":"3","unit":" "},{"name":"Cumin","quantity":"1","unit":"tsp"},{"name":"Coriandre","quantity":"1","unit":"tsp"},{"name":"Curcuma","quantity":"1","unit":"tsp"},{"name":"Garam masala","quantity":"1","unit":"tsp"},{"name":"Ail","quantity":"1","unit":"tsp"}]','','végé',5,30,30,5,'','butter_tofu.jpg',TO_TIMESTAMP(1745252773826/1000),0,0,0,0,'https://www.youtube.com/shorts/axQVUALmY0E');
INSERT INTO Recipe VALUES(6,'Wrap tofu','[{"name":"Tortillas","quantity":"2","unit":" "},{"name":"Tofu","quantity":"200","unit":"g"},{"name":"Haricots rouges","quantity":"100","unit":"g"},{"name":"Avocat","quantity":"1","unit":" "},{"name":"Cheddar râpé","quantity":"30","unit":"g"}]','Cuire le tofu au air-fryer une 15aine de minute à 400F\r\nAssembler\r\nPasser au grill / appareil à panini pendant 5min','végé',5,10,20,1,'','',TO_TIMESTAMP(1745253808833/1000),1055,62,84,52,NULL);
