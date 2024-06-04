import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Recipe } from '../Models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  ViewsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private recipeSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([
    {
      name: 'Alfajores cookies',
      level: 3,
      favorite: true,
      ingredients: ['1 cup of sugar', '1 cup of sugar', '4.5 cups of cornflour', 'A bag of baking powder', 'A bag of vanilla sugar', '200 grams of butter', '3 eggs', 'A box of milk jam', 'Coconut for coating'],
      instructions: ['Beat the butter and sugar until you get a smooth cream', 'Add the rest of the ingredients', 'Roll out the dough and cut out shapes', 'Put in the fridge for half an hour and straight into the oven', 'Bake at 170 degrees for exactly 10 minutes']
    },
    {
      name: 'Milk Jam Cake',
      level: 1,
      favorite: false,
      ingredients: ['A packet of biscuits', '100 grams of milk chocolate', '1 cup of milk', '75 grams of butter', '500 ml sweet cream', 'A cup of biscuit crumbs', 'A box of milk jam'],
      instructions: ['Dip whole biscuits in milk and arrange in a pan', 'Melt chocolate and butter and spread on top', 'Whip sweet cream and mix with the biscuit crumbs', 'Dip whole biscuits in milk and place on top', 'Whip sweet cream with milk jam', 'Decorate on top with milk jam']
    },
    {
      name: 'Hamantaschen',
      level: 3,
      favorite: true,
      ingredients: ['1/2 roll (200 grams) ', '3 tablespoons of chocolate spread', '2/3 cup of dark chocolate chips', '2/3 cup biscuit crumbs', '1 cup mini marshmallows'],
      instructions: ['Heat the oven to 180 degrees', 'Cut a sheet about 30 cm long from the dough and cut out a circle with a diameter of 28 cm. Place in a pan with baking,Bake for 35 minutes or until golden.']
    },
    {
      name: 'Vanilla Panna Cotta',
      level: 2,
      favorite: true,
      ingredients: ['2 cups heavy cream', '1 cup whole milk', '1/2 cup granulated sugar', '2 teaspoons vanilla extract', '4 teaspoons powdered gelatin', '6 tablespoons cold water'],
      instructions: ['In a small bowl, sprinkle gelatin over cold water and let it sit for 5 minutes', 'In a saucepan, combine heavy cream, milk, and sugar. Heat until sugar dissolves but do not boil', 'Remove from heat, stir in vanilla extract and bloomed gelatin until completely dissolved', 'Pour into molds or ramekins and chill in the refrigerator for at least 4 hours or until set', 'Serve with fresh berries or fruit compote']
    },
    {
      name: 'Classic Tiramisu',
      level: 3,
      favorite: true,
      ingredients: ['6 egg yolks', '3/4 cup granulated sugar', '1 cup mascarpone cheese', '1 1/2 cups heavy cream', '2 cups strong brewed coffee, cooled', '1/2 cup coffee liqueur', 'Ladyfinger cookies', 'Cocoa powder for dusting'],
      instructions: ['In a heatproof bowl, whisk together egg yolks and sugar over a pot of simmering water until thickened', 'Remove from heat and whisk in mascarpone cheese until smooth', 'In a separate bowl, whip heavy cream until stiff peaks form', 'Fold whipped cream into mascarpone mixture until well combined', 'In a shallow dish, mix cooled coffee with coffee liqueur', 'Dip ladyfinger cookies into the coffee mixture and layer them in the bottom of a serving dish', 'Spread half of the mascarpone mixture over the ladyfingers', 'Repeat layers with remaining ladyfingers and mascarpone mixture', 'Cover and refrigerate for at least 4 hours or overnight', 'Before serving, dust the top with cocoa powder'],
    },
    {
      name: 'Homemade Yogurt',
      level: 1,
      favorite: false,
      ingredients: ['1 quart whole milk', '2 tablespoons plain yogurt with live active cultures'],
      instructions: ['Heat milk in a saucepan over medium heat until it reaches 180°F (82°C), stirring occasionally to prevent scorching', 'Remove from heat and let it cool until it reaches 110°F (43°C)', 'In a small bowl, mix a few tablespoons of warm milk with plain yogurt to temper it', 'Stir the yogurt mixture back into the remaining warm milk', 'Pour the mixture into a clean container, cover, and wrap in a towel to keep warm', 'Let it sit undisturbed at room temperature for 6-12 hours, or until thickened to your liking', 'Refrigerate for at least 2 hours before serving'],
    },
    {
      name: 'Chocolate Mousse',
      level: 2,
      favorite: true,
      ingredients: ['6 ounces semisweet chocolate, chopped', '3 tablespoons water', '3 large egg yolks', '2 tablespoons granulated sugar', '1 1/2 cups heavy cream'],
      instructions: ['Melt chocolate and water in a heatproof bowl over a pot of simmering water, stirring until smooth. Remove from heat and let it cool slightly', 'In a separate bowl, whisk together egg yolks and sugar until pale and thick', 'Gradually whisk in melted chocolate until well combined', 'In another bowl, whip heavy cream until stiff peaks form', 'Gently fold whipped cream into the chocolate mixture until no streaks remain', 'Divide mousse into serving dishes and chill in the refrigerator for at least 2 hours before serving'],
    },
    {
      name: 'Raspberry Cheesecake',
      level: 3,
      favorite: false,
      ingredients: ['1 1/2 cups graham cracker crumbs', '1/4 cup granulated sugar', '1/2 cup unsalted butter, melted', '3 (8-ounce) packages cream cheese, softened', '1 cup granulated sugar', '3 large eggs', '1 teaspoon vanilla extract', '1/2 cup raspberry preserves'],
      instructions: ['Preheat oven to 350°F (175°C) and grease a 9-inch springform pan', 'In a bowl, mix together graham cracker crumbs, sugar, and melted butter until well combined', 'Press mixture into the bottom of the prepared pan and bake for 10 minutes. Let it cool', 'In a large bowl, beat cream cheese and sugar until smooth', 'Add eggs, one at a time, beating well after each addition. Stir in vanilla extract', 'Pour cream cheese mixture over the cooled crust', 'Drop raspberry preserves by spoonfuls over the cheesecake batter', 'Use a knife to swirl the preserves into the batter', 'Bake for 45-50 minutes or until the center is almost set', 'Let it cool in the pan on a wire rack. Chill in the refrigerator for at least 4 hours before serving'],
    },
    {
      name: 'Chocolate Ice Cream',
      level: 2,
      favorite: true,
      ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup granulated sugar', '1/2 cup unsweetened cocoa powder', '4 large egg yolks', '4 ounces semisweet chocolate, chopped', '1 teaspoon vanilla extract'],
      instructions: ['In a saucepan, whisk together heavy cream, milk, sugar, and cocoa powder. Heat over medium heat until the mixture starts to steam', 'In a bowl, whisk egg yolks. Slowly pour a little of the hot cream mixture into the yolks, whisking constantly to temper them', 'Pour the tempered egg mixture back into the saucepan with the remaining cream mixture', 'Cook over medium heat, stirring constantly, until the mixture thickens and coats the back of a spoon', 'Remove from heat and stir in chopped chocolate until melted. Stir in vanilla extract', 'Strain the mixture through a fine-mesh sieve into a clean bowl', 'Cover and chill the mixture in the refrigerator for at least 4 hours or overnight', 'Churn the mixture in an ice cream maker according to the manufacturer'],
    },
    {
      name: 'Classic Rice Pudding',
      level: 1,
      favorite: false,
      ingredients: ['1/2 cup white rice', '4 cups whole milk', '1/2 cup granulated sugar', '1 teaspoon vanilla extract', '1/4 teaspoon ground cinnamon', 'Pinch of salt'],
      instructions: ['In a saucepan, combine rice and milk. Bring to a simmer over medium heat', 'Reduce heat to low and cook, stirring occasionally, for about 25-30 minutes or until rice is tender and mixture has thickened', 'Stir in sugar, vanilla extract, cinnamon, and salt', 'Cook for an additional 5 minutes, stirring constantly', 'Remove from heat and let it cool slightly before serving warm, or chill in the refrigerator for a few hours before serving cold'],
    },
    {
      name: 'Banana Pudding',
      level: 2,
      favorite: false,
      ingredients: ['3/4 cup granulated sugar', '1/4 cup cornstarch', '1/4 teaspoon salt', '3 cups whole milk', '4 large egg yolks', '2 tablespoons unsalted butter', '2 teaspoons vanilla extract', '3 ripe bananas, sliced', 'Vanilla wafers'],
      instructions: ['In a saucepan, whisk together sugar, cornstarch, and salt', 'In a separate bowl, whisk together milk and egg yolks until well combined', 'Gradually whisk the milk mixture into the sugar mixture', 'Cook over medium heat, stirring constantly, until the mixture thickens and bubbles', 'Remove from heat and stir in butter and vanilla extract until smooth', 'Layer sliced bananas and vanilla wafers in a serving dish', 'Pour the pudding over the bananas and wafers', 'Cover and refrigerate for at least 4 hours or until set'],
    },
    {
      name: 'Strawberry Shortcake',
      level: 3,
      favorite: true,
      ingredients: ['2 cups all-purpose flour', '1/4 cup granulated sugar', '1 tablespoon baking powder', '1/2 teaspoon salt', '1/2 cup unsalted butter, cold and cut into cubes', '3/4 cup heavy cream', '2 cups sliced strawberries', 'Whipped cream'],
      instructions: ['Preheat oven to 425°F (220°C) and line a baking sheet with parchment paper', 'In a large bowl, whisk together flour, sugar, baking powder, and salt', 'Cut in the cold butter using a pastry cutter or fork until the mixture resembles coarse crumbs', 'Stir in heavy cream until the dough comes together', 'Turn dough out onto a lightly floured surface and knead gently a few times', 'Pat dough into a 1-inch thick circle and cut into rounds using a biscuit cutter', 'Place rounds onto the prepared baking sheet and bake for 12-15 minutes or until golden brown', 'Let biscuits cool slightly before assembling the shortcakes', 'To assemble, split biscuits in half and top with sliced strawberries and whipped cream'],
    },
    {
      name: 'Bites of bread',
      level: 2,
      favorite: false,
      ingredients: ['4 cups stale bread, cubed', '2 cups whole milk', '1/2 cup granulated sugar', '4 large eggs', '1 teaspoon vanilla extract', '1/2 teaspoon ground cinnamon', '1/4 teaspoon ground nutmeg', '1/4 cup raisins (optional)', 'Whipped cream or vanilla sauce for serving'],
      instructions: ['Preheat oven to 350°F (175°C) and grease a baking dish', 'In a large bowl, combine bread cubes and milk. Let it soak for about 10 minutes', 'In another bowl, whisk together sugar, eggs, vanilla extract, cinnamon, and nutmeg', 'Pour egg mixture over the bread mixture and stir until well combined', 'Fold in raisins if using', 'Pour mixture into the prepared baking dish', 'Bake for 45-50 minutes or until the pudding is set and the top is golden brown', 'Let it cool slightly before serving. Serve warm with whipped cream or vanilla sauce'],
    },
    {
      name: 'Rice Krispie Treats',
      level: 1,
      favorite: true,
      ingredients: ['6 cups Rice Krispies cereal', '4 tablespoons unsalted butter', '1 package (10 ounces) marshmallows'],
      instructions: ['Grease a 9x13-inch baking dish', 'In a large saucepan, melt butter over low heat', 'Add marshmallows and stir until completely melted and smooth', 'Remove from heat and stir in Rice Krispies cereal until well coated', 'Press mixture evenly into the prepared baking dish using a greased spatula or your hands', 'Let it cool completely before cutting into squares'],
    },
    {
      name: 'Chocolate Cookies',
      level: 2,
      favorite: false,
      ingredients: ['1/2 cup granulated sugar', '1/4 cup unsweetened cocoa powder', '1/4 cup cornstarch', '1/8 teaspoon salt', '2 3/4 cups whole milk', '4 ounces semisweet chocolate, chopped', '1 teaspoon vanilla extract'],
      instructions: ['In a saucepan, whisk together sugar, cocoa powder, cornstarch, and salt', 'Gradually whisk in milk until smooth', 'Cook over medium heat, stirring constantly, until the mixture thickens and bubbles', 'Remove from heat and stir in chopped chocolate and vanilla extract until chocolate is melted and mixture is smooth', 'Pour pudding into individual serving dishes', 'Cover with plastic wrap, making sure the wrap touches the surface of the pudding to prevent a skin from forming', 'Chill in the refrigerator for at least 2 hours or until set']
    },
    {
      "name": "Vanilla Brownies",
      "level": 3,
      "favorite": true,
      "ingredients": ["1/2 cup butter","1 and 1/4 cups sugar","3 eggs","1 tablespoon vanilla","3/4 cup all-purpose flour","1/4 cup cocoa powder", "1/4 cup hot cream", "1/2 cup chopped dark chocolate"],
      "instructions": ["Preheat oven to 180°C (350°F)","Cream butter and sugar in the mixing bowl of a mixer until melted together smoothly", "Add eggs and vanilla and continue to fry until melted and combined","Add the flour and cocoa and stir until melted","Add hot cream and dark chocolate and mix well","Create a uniform baking layer in a lined baking pan","Bake for 25-30 minutes or until the brownies are set when decorated" ]
    },
    {
      "name": "Apple Crumble Dessert",
      "level": 2,
      "favorite": false,
      "ingredients": ["4-5 large apples, peeled and diced","2 tablespoons white sugar","1 teaspoon cinnamon","1/4 cup water", "1 cup cornflour","1/2 cup flour","1/2 cup white sugar","1/2 cup brown sugar","1/2 cup butter","1/4 teaspoon salt"],
      "instructions": ["Preheat oven to 180°C (350°F)", "Mix the apples, white sugar, cinnamon, and water in a saucepan over medium heat until the apples soften and form a cream","Prepare the crumble by mixing the cornflour, flour, white sugar, brown sugar, and salt in a large bowl","Add the butter and transfer to a lined baking dish","Spread the apples on the dough in the pan and distribute the crumble evenly","Bake for 35-40 minutes or until the crumble is set and the apples turn golden"]
    },
    {
      "name": "Dessert with Herbs",
      "level": 1,
      "favorite": true,
      "ingredients": ["1/2 cup butter","1/2 cup white sugar", "1 egg","2 cups flour","1/4 cup powdered sugar","1/4 cup cocoa powder","1 teaspoon baking powder", "1/4 teaspoon salt"],
      "instructions": ["Preheat oven to 180°C (350°F)","Mix all dry ingredients in a large bowl","Add the butter and transfer to a lined baking dish","Spread the mixture on the dough in the pan","Bake for 25-30 minutes or until the dessert is set and the top is golden" ]
    }

  ]);
  constructor() { }

  get Recipes$(): Observable<Recipe[]> {
    return this.recipeSubject.asObservable();
  }
  get filterRecipes$(): Observable<Recipe[]> {
    return of(this.recipeSubject.getValue().filter(r => r.favorite === true));
  }
  get ViewsCounter$(): Observable<number> {
    return this.ViewsSubject.asObservable();
  }

  AddRecipe(NewRecipe: Recipe): void {
    const oldRecipes = this.recipeSubject.getValue();
    this.recipeSubject.next([...oldRecipes, NewRecipe]);
  }
  AddToCounter(): void {
    const old = this.ViewsSubject.getValue();
    this.ViewsSubject.next(old + 1);
  }

  DeleteRecipe(recipeToDelete: Recipe): void {
    this.recipeSubject.next(this.recipeSubject.getValue().filter(r => (r !== recipeToDelete)));
  }

  SetRecipe(recipeToSet: Recipe): void {

  }

  changeFavorite(r: Recipe): Recipe {
    var newRec = this.recipeSubject.value.find(rec => rec == r);
    //this.DeleteRecipe(newRec);
    newRec.favorite = !newRec.favorite;
    //this.AddRecipe(newRec);
    return newRec;
  }



}
