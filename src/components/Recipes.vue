<template>
  <div class="container" style="margin-top: 8%">
    <div class="row">
      <!------------------------------------------Recipe titles column--------------------------------------------------->
      <div class="col-mid-3 recipeCol">
        <h1>Recipe</h1>
        <div class="recipeBox ">
          <h4 class="bg-primary" style="border-radius: 25px; text-align: center; width: 90%; margin: auto">Daily Recipe</h4>
          <p style="text-align: center"><a @click.prevent="activeRecipe('today', '../static/velveetalightcheesyspinachdip.jpg')" href="">Velveeta Cheesy Spinach Dip</a></p>
          <h4 class="bg-primary" style="border-radius: 25px; text-align: center; width: 90%; margin: auto">Weekly Recipe</h4>
          <ul style="list-style-type:none">
            <li>
              <h6 style="font-weight: bold">Sunday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('sunday','static/creamypestofish45380.jpg')" href="">Creamy Pesto Fish</a></p>
            </li>
            <li>
              <h6 style="font-weight: bold">Monday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('monday','')" href="">JELL-O Desert</a></p>
            </li>
            <li>
              <h6 style="font-weight: bold">Tuesday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('tuesday','')" href="">Lemon Viennese Coffee</a></p>
            </li>
            <li>
              <h6 style="font-weight: bold">Wednesday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('wednesday','')" href="">Cheese Quesadillas</a></p>
            </li>
            <li>
              <h6 style="font-weight: bold">Thursday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('thursday','')" href="">BBQ BEEF Skillet With Cornbread</a></p>
            </li>
            <li>
              <h6 style="font-weight: bold">Friday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('friday','')" href="">Pasta With Chicken and Veggie</a></p>
            </li>
            <li>
              <h6 style="font-weight: bold">Saturday</h6>
              <p style="text-align: center"><a @click.prevent="activeRecipe('saturday','static/cannoliiceboxcake.jpg')" href="">Cannoli Iecbox Cake</a></p>
            </li>
          </ul>
        </div>
      </div>
      <!------------------------------------------Recipe description column--------------------------------------------------->

      <div class="col-md-6 desciption" style="margin-top: 5%">
        <!------------------------------------------sunday content--------------------------------------------------->
        <div  v-if="activeContent==='sunday'" class="sunday">
          <h3>Creamy Pesto Fish</h3>
          <p>
          <p>
          Prep Time: 5 Minutes (Total Time : 20 Minutes)
          Serving Size: 4
          </p>
          <ul>
            <li>
              <p>4 Frozen Haddock Fillets (1 Pound)</p>
            </li>
            <li>
              <p>1/4 cup MIRACLE WHIP Light Dressing</p>
            </li>
            <li>
              <p>2 tablespoons Pesto</p>
            </li>
            <li>
              <p>1 medium Tomato, Chopped</p>
            </li>
          </ul>
          <p>
            PREHEAT oven to 450°F. Place frozen fish in single layer in 13x9-inch baking dish          </p>
          <p>
            TOP with combined dressing and pesto; sprinkle with tomatoes
          </p>
          <p>BAKE 15 min. or until fish flakes easily with fork</p>
          <p>Prepare as directed, using halibut or cod</p>
        </div>
        <!------------------------------------------monday content--------------------------------------------------->
        <div class="monday" v-if="activeContent==='monday'">
          <h3>JELL-O Desert</h3>
          <p>
          <p>
          Prep Time: 5 Minutes (Total Time: 25 Minutes)
          Serving Size: 4
          </p>
          <ul>
            <li>
              <p>1 pkg. (4-serving size) JELL-O Brand Strawberry Flavor Gelatin, Or Any Flavor</p>
            </li>
            <li>
              <p>3/4 cup Boiling Water</p>
            </li>
            <li>
              <p>Ice Cubes</p>
            </li>
            <li>
              <p>1/2 cup Cold Water</p>
            </li>
            <li>
              <p>1/2 cup Thawed COOL WHIP Whipped Topping</p>
            </li>
          </ul>
          <p>
            DISSOLVE dry gelatin mix in boiling water in bowl. Add enough ice cubes to cold water to measure 1-1/4 cups; add to gelatin mixture. Add to blender; cover and blend 30 sec          </p>
          <p>
            POUR evenly into 4 dessert dishes. Refrigerate at least 20 min. or until set. Store leftover dessert in refrigerator.
          </p>
          <p>Save 80 calories per serving by preparing with JELL-O Brand Sugar Free Low Calorie Gelatin and COOL WHIP LITE Whipped Topping for a low calorie, low-fat version of this dessert. Try our healthy living version of JELL-O® 1-2-3 Dessert.</p>
          <p>Top each serving with 1/4 cup cut-up fruit to match your JELL-O flavor. For instance, serve sliced strawberries with JELL-O Brand Strawberry Flavor Gelatin.</p>
        </div>
        <!------------------------------------------tuesday content--------------------------------------------------->
        <div class="tuesday" v-if="activeContent==='tuesday'">
          <h3>Lemon Viennese Coffee</h3>
          <p>
          <p>
          Prep Time: 5 Minutes (Total Time 10 Minutes)
          Serving Size: 6
          </p>
          <ul>
            <li>
              <p>6 tablespoons MAXWELL HOUSE Decaffeinated Coffee</p>
            </li>
            <li>
              <p>1 tablespoon Grated Lemon Peel</p>
            </li>
            <li>
              <p>1/2 teaspoon Ground Cinnamon</p>
            </li>
            <li>
              <p>1/3 cup Honey</p>
            </li>
            <li>
              <p>4-1/2 cups Water</p>
            </li>
          </ul>
          <p>
            PLACE coffee grounds, lemon peel and cinnamon in filter in brew basket of coffee maker. Place honey in empty pot of coffee maker.ADD water to coffee maker; brew. When brewing is complete, stir until well blended. <p>
            POUR evenly into 4 dessert dishes. Refrigerate at least 20 min. or until set. Store leftover dessert in refrigerator.
          </p>
          <p>Great Substitute Substitute ground ginger for the cinnamon or firmly packed brown sugar for the honey</p>
          <p>RECIPE COURTESY OF KRAFT FOODS</p>
        </div>
        <!------------------------------------------wednesday content--------------------------------------------------->
        <div class="wednesday" v-if="activeContent==='wednesday'">
          <h3>Cheese Quesadillas</h3>
          <p>
          <p>
          Prep Time: 1 minutes (Total Time: 1 Minutes)
          Serving Size: 1
          </p>
          <ul>
            <li>
              <p>1 TACO BELL® HOME ORIGINALS® Flour Tortillas</p>
            </li>
            <li>
              <p>1 KRAFT Singles</p>
            </li>
          </ul>
          <p>
            PLACE tortilla on microwavable plate. Place Singles on half of tortilla. Fold tortilla in half to cover Singles. Cover.
        </p>
          <p>MICROWAVE on HIGH 20 to 30 sec. or until Singles begins to melt. Cut into wedges to serve</p>
          <p>Try serving with crisp apple slices, celery sticks and KRAFT CATALINA Dressing as a dip</p>
        </div>
        <!------------------------------------------thursday content--------------------------------------------------->
        <div class="thursday" v-if="activeContent==='thursday'">
          <h3>BBQ BEEF Skillet With Cornbread</h3>
          <p>
          <p>
          Prep Time: 1-1/2 to 2 hours
          Serving Size: 4
          </p>
          <ul>
            <li>
              <p>1-1/2 pound Beef Bottom Round Steaks, Cut 1 Inch Thick</p>
            </li>
            <li>
              <p>1 cup Barbecue Saucel</p>
            </li>
            <li>
              <p>1 Large Onion, Sliced (Half Inch), Separated Into Rings</p>
            </li>
            <li>
              <p>Cornbread Or Corn Muffins</p>
            </li>
          </ul>
          <p>
            1. Mix barbecue sauce with 1/4 cup water in large skillet. Place beef steaks and onion in skillet; bring to a boil. Reduce heat; cover tightly and simmer 1-1/4 to 1-3/4 hours or until beef is fork-tender.
        </p>
          <p>2. Remove steaks. Cook and stir sauce 5 minutes or until thickened.</p>
          <p>3. Carve steaks. Serve with sauce and cornbread</p>
        </div>
        <!------------------------------------------friday content--------------------------------------------------->
        <div class="friday" v-if="activeContent==='friday'">
          <h3>Pasta With Chicken and Veggie</h3>
          <p>
          <p>
            Prep Time: 5 Minutes (Total Time 10 Minutes)
            Serving Size: 6
          </p>
          <ul>
            <li>
              <p>6 tablespoons MAXWELL HOUSE Decaffeinated Coffee</p>
            </li>
            <li>
              <p>1 tablespoon Grated Lemon Peel</p>
            </li>
            <li>
              <p>1/2 teaspoon Ground Cinnamon</p>
            </li>
            <li>
              <p>1/3 cup Honey</p>
            </li>
            <li>
              <p>4-1/2 cups Water</p>
            </li>
          </ul>
          <p>
            PLACE coffee grounds, lemon peel and cinnamon in filter in brew basket of coffee maker. Place honey in empty pot of coffee maker.ADD water to coffee maker; brew. When brewing is complete, stir until well blended. <p>
          POUR evenly into 4 dessert dishes. Refrigerate at least 20 min. or until set. Store leftover dessert in refrigerator.
        </p>
          <p>Great Substitute Substitute ground ginger for the cinnamon or firmly packed brown sugar for the honey</p>
          <p>RECIPE COURTESY OF KRAFT FOODS</p>
        </div>
        <!------------------------------------------saturday content--------------------------------------------------->
        <div class="saturday" v-if="activeContent==='saturday'">
          <h3>Cannoli Iecbox Cake</h3>
          <p>
          <p>
            Prep Time: 1-1/2 to 2 hours
            Serving Size: 4
          </p>
          <ul>
            <li>
              <p>1-1/2 pound Beef Bottom Round Steaks, Cut 1 Inch Thick</p>
            </li>
            <li>
              <p>1 cup Barbecue Saucel</p>
            </li>
            <li>
              <p>1 Large Onion, Sliced (Half Inch), Separated Into Rings</p>
            </li>
            <li>
              <p>Cornbread Or Corn Muffins</p>
            </li>
          </ul>
          <p>
            1. Mix barbecue sauce with 1/4 cup water in large skillet. Place beef steaks and onion in skillet; bring to a boil. Reduce heat; cover tightly and simmer 1-1/4 to 1-3/4 hours or until beef is fork-tender.
          </p>
          <p>2. Remove steaks. Cook and stir sauce 5 minutes or until thickened.</p>
          <p>3. Carve steaks. Serve with sauce and cornbread</p>
        </div>
        <div v-if="activeContent==='today'">
          <h3>Velveeta Cheesy Spinach Dip</h3>
          <p>
          <p>
            Prep Time: 5 Minutes (Total Time 12 Minutes)
            Serving Size: 24
          </p>
          <ul>
            <li>
              <p>1 lb. (16 oz.) VELVEETA Made With 2 Percent Milk Reduced Fat Pasteurized Prepared Cheese Product, Cut Up</p>
            </li>
            <li>
              <p>1 can (14-1/2 oz.) Tomatoes, Undrained, Cut Up</p>
            </li>
            <li>
              <p>1 pkg. (10 oz.) Frozen Chopped Spinach, Thawed, Drained</p>
            </li>
            <li>
              <p>1/4 teaspoon Crushed Red Pepper</p>
            </li>
          </ul>
          <p>
            MIX VELVEETA Made With 2% Milk and tomatoes in 1-qt. microwaveable bowl. Microwave on HIGH 5 min. or until VELVEETA is completely melted, stirring every 2 min.
          </p>
          <p>
            ADD remaining ingredients; mix well. Microwave on HIGH 2 min. or until heated through; stir.
          </p>
          <p>SERVE hot with breadsticks, tortilla chips or assorted cut-up fresh vegetables.</p>
          <p>   Substitute: Substitute 1 can (14-1/2 oz.) diced tomatoes, undrained, for the cut-up whole tomatoes.</p>
        </div>
        </div>
      <!------------------------------------------Recipe picture column--------------------------------------------------->
      <div class="col-md-3" style="margin-top: 5%">
        <img :src="imgSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      imgSrc: '../static/velveetalightcheesyspinachdip.jpg',
      activeContent: 'today'
    }
  },
  methods: {
    activeRecipe (day, imgURl) {
      this.activeContent = day
      this.imgSrc = imgURl
    }
  }
}
</script>

<style scoped>
.recipeBox{
  border: 2px solid blue;
  border-radius: 25px;

}
.recipeCol{
    width: 25%;
  }
</style>
