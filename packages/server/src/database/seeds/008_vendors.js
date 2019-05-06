/* eslint-disable no-unused-vars */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('vendors').insert([
        {
          name: 'Life Fitness',
          handle: 'life-fitness',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-lifefitness.png',
          is_featured: true,
          is_top_six: false,
          description: `Life Fitness is an American fitness equipment company that specializes in the production and distribution of equipment such as stationary bikes and treadmills. For more than 45 years, Life Fitness has been dedicated to creating fitness solutions that benefit both facilities and exercisers. Our mission to keep people active started with the Lifecycle exercise bike and continues with the widest range of cardio, strength and group training products in the fitness industry.`
        },
        {
          name: 'Precor',
          handle: 'precor',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-precor.png',
          is_featured: true,
          is_top_six: false,
          description: `Precor's mission is to develop personalized health and fitness experiences that help people live the lives they desire. For over three decades, we've driven fitness forward with a passionate focus on ergonomic motion, proven science, and superior engineering. We constantly study and anticipate the needs of the people and organizations we serve, and continually redefine the levels of innovation, quality, and service necessary to deliver the very best fitness experiences - all with the goal of improving the ways people improve themselves. Our equipment is chosen by health clubs, hotels and spas, universities, and individuals all over the world.`
        },
        {
          name: 'Inspire Fitness',
          handle: 'inspire-fitness',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-inspire.png',
          is_featured: false,
          is_top_six: true,
          top_six_position: 1,
          description: `It all started when Ted Habing, Inspire Fitness' Chairman, taught himself to weld at the age of 13 so that he could create his own gym equipment.  In 2003, Inspire Fitness was born.  Boasting over 100 years of combined experience, we pride ourselves on being avid fitness people, creatores of unique products that are properly designed to fit the human body, and for going above and beyond to ensure that our customer thoroughly enjoys our equipment.`
        },
        {
          name: 'Spirit Fitness',
          handle: 'spirit-fitness',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-spirit.png',
          is_featured: false,
          is_top_six: true,
          top_six_position: 2,
          description: `We built our first fitness product in 1983, with the simple goal of giving our customers the highest quality equipment to help them achieve their fitness goals.\n\nIt is that same simple purpose which continues today in designing and developing every piece of equipment that bears the Spirit Fitness name. We make sure that each new equipment design meets the same demanding standards that have crafted the Spirit Fitness brand.\n\nOver the last thirty years, our focus has always been—and will continue to be—delivering a quality experience with our equipment. We understand that our products are an investment and we design them to keep pace with your own longterm fitness goals. All of our products are produced in our ISO-certified factories for consistent quality.\n\nOur other passion has always been on innovation that improves our customers’ experience. We were one of the first to integrate cooling fans on our products; a high-quality fan is now standard on nearly all Spirit Fitness products. We also integrate audio speakers for MP3 players on most of our products. The number one reason people stop exercising is from boredom, and we know that if you are a little more comfortable, you will work-out longer and achieve your fitness goals that much faster.\n\nThese, along with many other exclusive features, are put into our products to help you achieve success. There are many companies that produce fitness equipment, but few that focus on the details that you will find in a Spirit Fitness product.`
        },
        {
          name: 'StairMaster',
          handle: 'stairmaster',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-stairmaster.png',
          is_featured: false,
          is_top_six: true,
          top_six_position: 3,
          description: `StairMaster is a US company specializing in the design and production of fitness equipment for commercial, light commercial, and home use. They sell cardiovascular and strength equipment such as stair climbing machines, TreadClimber cardio machines and dumbbell sets.`
        },
        {
          name: 'Helix',
          handle: 'helix',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-helix.png',
          is_featured: false,
          is_top_six: true,
          top_six_position: 4,
          description: `Headquartered in Boston, MA, Helix is the world’s leading manufacturer of lateral training fitness equipment.  Established in 2008, the company’s revolutionary lateral fitness system has been awarded patents around the world, and its premiere fitness product, the Helix Lateral Trainer, has been installed in thousands of diverse settings including health & fitness clubs, YMCAs, training studios, corporate gyms, rehabilitation facilities, multi-tenant fitness centers, colleges & universities, high-profile celebrities and multiple championship professional sports franchises.  The Helix Lateral Trainer is widely recognized as a revolutionary breakthrough in cardio training and is the pioneer of an entirely new category of fitness equipment - the lateral trainer.`
        },
        {
          name: 'BodyCraft',
          handle: 'bodycraft',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-bodycraft.png',
          is_featured: false,
          is_top_six: true,
          top_six_position: 5,
          description: `BodyCraft® was founded in 1994 with the simple mission of helping as many people as possible achieve their wellness goals.  Our passion lies in creating the ultimate in safety, variety, design, affordability and motivation.  Every BODYCRAFT product is built to fulfill each of these purposes.\n\nEach Bodycraft machine is designed to be fun and motivating – helping you build a better you with each workout. We only supply products that we use in our own homes. In fact, many of our products can be found in the homes of our team!\n\nWhile our designs have often been accepted as standard in the fitness industry, our ideas are proprietary and protected by patents. When you buy BodyCraft, you’ll never have to worry about quality - no matter how much you use your equipment, it’s built for a lifetime. We never compromise quality for price – and our warranties are proof of our commitment to you! Don’t be fooled by a copy – only a Bodycraft machine is built to last.`
        },
        {
          name: 'DKN Technology',
          handle: 'dkn-technology',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-dkn-technology.jpg',
          is_featured: false,
          is_top_six: true,
          top_six_position: 6,
          description: `DKN Technology is a global fitness manufacturer with its roots in Belgium. Over the past 18 years, DKN has grown from a small fitness company in Europe to having its products sold in all corners of the world.\n\nBeing at the forefront of progressive science and technology, the DKN machines accelerate weight loss and quickly reduce body fat and the appearance of cellulite, leaving you with tighter, smoother vibrant skin.\n\nDKN Technology has pioneered the evolution of WBV and continues to explore new premium fitness equipment. Please continue to visit our site in the future for new products delivering the same excellent value as the DKN WBV machines.`
        },
        {
          name: 'Apollo Athletics',
          handle: 'apollo-athletics',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-apollo-athletics.jpg',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'Bosu',
          handle: 'bosu',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-bosu.jpg',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'Cascade Health & Fitness',
          handle: 'cascade-health-&-fitness',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-cascade-health-fitness.png',
          is_featured: false,
          is_top_six: false,
          description: `Cascade Health and Fitness was founded to bring you the best performing health and fitness products, at the best prices. With over 25 years of experience in this industry, we are passionate about the belief that staying fit can help people live happier, healthier lives. Company President John Post has spent over 20 years in the fitness industry, including positions as President and CEO of LeMond Fitness and Vice President at StairMaster, Inc.\n\nMore than a fitness company, we are a team of individuals dedicated to using exercise as a way to improve personal wellness. Our guiding philosophy is to develop and maintain close personal relationships with our customers, relationships that will last beyond the immediate sale and into the future. We practice what we preach in regards to treating our customers with honesty, fairness and integrity.`
        },
        {
          name: 'Cybex',
          handle: 'cybex',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-cybex.png',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'GoFit',
          handle: 'gofit',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-gofit.png',
          is_featured: false,
          is_top_six: false,
          description: `Train. Recover. Repeat. This simple fitness philosophy can help you get results, and go “fit” through life. GoFit offers gear and training for a total home-fitness solution designed to get real results for real people. It’s not a one-time-and-done solution, but a life-long process—a philosophy of fitness: Train. Recover. Repeat. Follow this course of action and you’ll get real results.\n\nFounded in 1999, GoFit set out to integrate superior fitness products with professional training. GoFit quickly developed into a top fitness manufacturer and industry leader. Our focus of combining innovative products with world-class instructional content from top experts in fitness, nutrition, health and wellness, endures. GoFit targets a ""fit"" lifestyle with a full range of products for core training, weighted resistance, muscle pain management, yoga and sports performance.\n\nGoFit's ongoing vision links the right product, and the best training, with people ready to make a dramatic, positive change. Are you ready for a fitness philosophy that gets results? Train. Recover. Repeat.\n\nGoFit products are available worldwide—including over 4000 stores in the U.S, and right here at GoFit.net.`
        },
        {
          name: 'Green Series',
          handle: 'green-series',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-green-series.png',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'Ivanko Engineered Passion',
          handle: 'ivanko-engineered-passion',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-ivanko.png',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'Merrithew',
          handle: 'merrithew',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-merrithew.jpg',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'PowerBlock',
          handle: 'powerblock',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-powerblock.png',
          is_featured: false,
          is_top_six: false,
          description: `PowerBlock, Inc. was founded in 1991 by specialty fitness equipment designer who became friends while designing equipment for several companies including Parabody and Cybex. While searching for specific needs in the fitness industry, they were drawn to the large amounts of dumbbells they would encounter in the specialty fitness stores they visited. There had to be a better way of providing fitness enthusiasts with the performance advantage of hand weights without the space and restrictions of old fashioned racks and dumbbells. It was here the idea for PowerBlock was Born. After two years of extensive testing, PowerBlock began sales of the newly coined “selectorized dumbbell”. Since then, PowerBlock has continued to be the leader in the fitness industry as we constantly strive to out do ourselves in the pursuit of excellence. Our best to you and your health from the team at PowerBlock.`
        },
        // {
        //   name: 'Regupol America',
        //   handle: 'regupol-america',
        //   logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-regupol.png',
        //   is_featured: false,
        //   is_top_six: false,
        //   description: ''
        // },
        {
          name: 'SPRI',
          handle: 'spri',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-spri.png',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        // {
        //   name: 'SuperMats',
        //   handle: 'supermats',
        //   logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-supermats.png',
        //   is_featured: false,
        //   is_top_six: false,
        //   description: ''
        // },
        {
          name: 'Teeter Hang Ups',
          handle: 'teeter-hang-ups',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-teeter-hang-ups.gif',
          is_featured: false,
          is_top_six: false,
          description: ''
        },
        {
          name: 'BH Fitness',
          handle: 'bh-fitness',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-bh.png',
          is_featured: false,
          is_top_six: false,
          description: `BH Fitness is a multi-national company within the BH Group, headquartered in Spain and creating quality products for over 100 years. Built on a legacy of producing high end, user-focused fitness equipment for the home, commercial and club commercial settings, BH Fitness manufactures and distributes treadmills, ellipticals, upright bicycles, recumbent bicycles, indoor training cycles,and strength equipment.\n\nBH Fitness has distribution and operations in North America, Spain, Mexico, Asia, UK, Portugal and Germany, our products can be found in more than 65 countries worldwide, making BH Fitness one of the most trusted and widely used fitness brands available today`
        },
        {
          name: 'Pro-Fit',
          handle: 'pro-fit',
          logo_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-pro-fit.png',
          is_featured: false,
          is_top_six: false,
          description: ``
        }
      ]);
    });
};
