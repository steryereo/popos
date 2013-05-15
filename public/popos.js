(function() {
  document.popos = function() {

    var data = [
      { "name" : "Redwood Park", "popos_addr" : "535 Washington St", "cartodb_id" : 59, "id_spur" : 1, "year_built" : 1972, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban park", "name_display" : "Redwood Park", "subject_to" : "No", "pic_file" : "RedwoodPark.jpg", "hours" : "", "seating_no" : "", "food_servi" : "None", "restrooms" : "", "food" : "N", "seating" : "Y", "restroom" : "", "description" : "Located at the base of the Transamerica Pyramid, this hidden oasis features a beautiful redwood grove, luscious ferns, and a tall water fountain, making the perfect escape from the bustling surroundings. The area also has an array of bronze sculptures, grassy patches, and ample seating. Take-out food vendors are nearby. This urban park is closed after office hours.", "seating_an" : "Y", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.402167979, "latitude" : 37.795052361, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40217,37.79505]}" },
      { "name" : "Commercial Street (235 Pine Entitlement)", "popos_addr" : "235 Pine St", "cartodb_id" : 17, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "235 Pine", "subject_to" : "Yes", "pic_file" : "235Pine.jpg", "hours" : "", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "This tree-lined street features seating for your enjoyment and relaxation. Many cafes and restaurants reside along Commercial Street, making it the perfect place to come to for a sit-down meal. Additional outdoor seating is provided during lunch hours. Open at all times.", "seating_an" : "", "hours_type" : "Unknown", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40228, "latitude" : 37.7943900000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40228,37.79439]}" },
      { "name" : "343 Sansome St", "popos_addr" : "343 Sansome St", "cartodb_id" : 14, "id_spur" : 6, "year_built" : 1990, "rating_spur" : "Excellent", "transportation" : "", "type" : "terrace", "name_display" : "343 Sansome", "subject_to" : "Yes", "pic_file" : "343_Sansome.jpg", "hours" : "10:00am - 5:00pm; Mon-Friday", "seating_no" : "18 chairs, 50 linear seats on planter box sizes.", "food_servi" : "None", "restrooms" : "None", "food" : "", "seating" : "Y", "restroom" : "", "description" : "This fifteenth floor open space has excellent views of surrounding buildings and streets, as well as the San Francisco Bay. The open terrace includes various types of seating, beautiful olive trees, and Joan Brown's Four Seasons obelisk which stands in the center. Adjacent to the building, just off Leidesdorff Street, sits a lunchtime mall which is available from 11am to 2pm. Two food vendors are on the ground floor of the building.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40146, "latitude" : 37.7937400000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40146,37.79374]}" },
      { "name" : "345 California St - West C", "popos_addr" : "345 California St", "cartodb_id" : 27, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "325 California West", "subject_to" : "Yes", "pic_file" : "345_California_Snippet_2_Battery_St.jpg", "hours" : "Open at all times.", "seating_no" : "Bench for ~3 people; 10 chairs w/ tables", "food_servi" : "CafÃ© on one snippet.", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "The West side can be entered from Sansome Street, next to the Mandarin Hotel. This shady area features a few granite benches and planters with tall bamboo. ", "seating_an" : "Y", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40091, "latitude" : 37.79263, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40091,37.79263]}" },
      { "name" : "345 California St - East B", "popos_addr" : "345 California St", "cartodb_id" : 26, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "325 California East", "subject_to" : "Yes", "pic_file" : "345_California_Snippet_1_Sansome_St.jpg", "hours" : "Open at all times.", "seating_no" : "Bench for ~3 people; 10 chairs w/ tables", "food_servi" : "CafÃ© on one snippet.", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "Two POPOS can be found on the west and east sides of the building, both connected by an interior walkway. The East side features a row of benches and some planters. This shady area is a sheltered alcove, great for meeting someone before heading to another destination, or just to use as a shortcut to the other side of the block.", "seating_an" : "Y", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40005, "latitude" : 37.7928600000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40005,37.79286]}" },
      { "name" : "100 Pine St", "popos_addr" : "100 Pine St", "cartodb_id" : 61, "id_spur" : 16, "year_built" : 1972, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "100 Pine", "subject_to" : "No", "pic_file" : "100_Pine.jpg", "hours" : "", "seating_no" : "", "food_servi" : "Yes.", "restrooms" : "", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "Tucked between two skyscrapers, this hidden urban garden is a wonderful little gem that can be accessed either through the front entrance of the building or a narrow walkway on Front Street. This shaded space offers water fountains, beautiful landscaping, and art. Food is offered on the site and there are designer tables and chairs to sit and eat.", "seating_an" : "Y", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.399159225, "latitude" : 37.792739211, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39916,37.79274]}" },
      { "name" : "101 California St", "popos_addr" : "101 California St", "cartodb_id" : 16, "id_spur" : 15, "year_built" : 1982, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "101 California", "subject_to" : "Yes", "pic_file" : "100_California.jpg", "hours" : "", "seating_no" : "None. Stairs? Some planter box seating but doesn't meet linear seating specs (12'' H and 9'' depth\"", "food_servi" : "None", "restrooms" : "None", "food" : "", "seating" : "", "restroom" : "", "description" : "Three large stepped pyramids used for seating and planter beds occupy the perimeter of this expansive plaza. A granite fountain gives the surroundings a peaceful quality. There are two restaurants on the buildings ground floor with ample outdoor seating. This is a great place to stop for lunch and catch some sun.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39797, "latitude" : 37.7935800000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39797,37.79358]}" },
      { "name" : "50 California St", "popos_addr" : "50 California St", "cartodb_id" : 60, "id_spur" : 13, "year_built" : 1972, "rating_spur" : "Excellent", "transportation" : "", "type" : "snippet", "name_display" : "50 California", "subject_to" : "No", "pic_file" : "50_California.jpg", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "Occupying the building setback, this small plaza and wrap-around walkway is a lovely little spot to stop and sit. It is scattered with various shaped planters, each with ledges placed at sitting height. A small cafe with outdoor seating sits to the side of the space. Open at all times.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.397530515, "latitude" : 37.7938074620001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39753,37.79381]}" },
      { "name" : "One California St", "popos_addr" : "One California St", "cartodb_id" : 63, "id_spur" : 14, "year_built" : 1970, "rating_spur" : "Excellent", "transportation" : "", "type" : "snippet", "name_display" : "One California", "subject_to" : "No", "pic_file" : "One_California.jpg", "hours" : "", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "Located directly across the street from 50 California, this mini plaza feels like an extension to its neighbor across the way. This snippet also features various shaped planters placed on a striped pavement of green stone and rose-colored granite. The cafe on the ground floor of the building fills some of the space with tables and chairs for its customers. Open at all times. ", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.397284143, "latitude" : 37.7933534250001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39728,37.79335]}" }
    ];

    /*
    { "name" : "Citygroup Center", "popos_addr" : "1 Sansome St", "cartodb_id" : 44, "id_spur" : 19, "year_built" : 1983, "rating_spur" : "Excellent", "transportation" : "", "type" : "greenhouse", "name_display" : "Citygroup Center", "subject_to" : "No", "pic_file" : "CitygroupCenter.jpg", "hours" : "", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "Built in the shell of the 1912 neoclassical London-Paris Bank building, this greenhouse provides a more sheltered space, while still letting in plenty of natural light. With its marble arches and corinthian columns, this POPOS is reminiscent of a Roman setting. Palm trees and other plants give a natural repreive to the otherwise cold setting, and an Art Deco bronze sculputer adds an artistic flair to the space. A cafe sits on the premise with plenty of tables and chairs. ", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.400797907, "latitude" : 37.7904798230001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.4008,37.79048]}" },
    { "name" : "525 Market St", "popos_addr" : "525 Market St", "cartodb_id" : 41, "id_spur" : 25, "year_built" : 1973, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "525 Market", "subject_to" : "No", "pic_file" : "525_Market.jpg", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "This two tiered, urban garden has a granite fountain and plenty of seating. Landscaping softens the hard granite setting and areas offer great patches of sun. A restaurant is located on site and opens in to the space. Open at all times.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.399736899, "latitude" : 37.790342809, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39974,37.79034]}" },
    { "name" : "425 Market St", "popos_addr" : "425 Market St", "cartodb_id" : 58, "id_spur" : 26, "year_built" : 1973, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "425 Market", "subject_to" : "No", "pic_file" : "425_Market.jpg", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "This shady urban garden is a great gem tucked between two highrises. Its sleek design features granite seating, flowers, planters, and trees. This is a great spot for relaxing with a good book, or sipping your favorite beverage. Open at all times.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.398510207, "latitude" : 37.7911115300001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39851,37.79111]}" },
    { "name" : "14 Fremont St", "popos_addr" : "14 Fremont St", "cartodb_id" : 42, "id_spur" : 27, "year_built" : 1983, "rating_spur" : "Excellent", "transportation" : "", "type" : "pedestrian walkway & urban garden", "name_display" : "14 Fremont", "subject_to" : "No", "pic_file" : "14_Freemont_aka_50_Freemont.jpg", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "This wide open space is a walkway connecting Fremont Street and 1st Street.  Half of the space is designated for customer seating for the adjacent cafes, while the other half is a cleanly manicured urban garden with patches of landscaped grass and strategically placed planters with trees. ", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39788898, "latitude" : 37.790766407, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39789,37.79077]}" },
    { "name" : "123 Mission St", "popos_addr" : "123 Mission St", "cartodb_id" : 30, "id_spur" : 33, "year_built" : 1986, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "123 Mission", "subject_to" : "Yes", "pic_file" : "123_Mission.jpg", "hours" : "Open at all times.", "seating_no" : "122 linear seats", "food_servi" : "Yes", "restrooms" : "No signs for any", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "This shady plaza is the perfect spot to escape the congestion of the downtown area. It is subdivided in to three alcoves by densely filled planters, all built at sitting height. The lush green setting softens the concrete and granite surroundings. Four food vendors are located nearby.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39423, "latitude" : 37.7921900000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39423,37.79219]}" },
    { "name" : "1 Market St", "popos_addr" : "1 Market St", "cartodb_id" : 39, "id_spur" : 34, "year_built" : 1976, "rating_spur" : "Excellent", "transportation" : "", "type" : "plaza", "name_display" : "One Market", "subject_to" : "No", "pic_file" : "One_Market.jpg", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "This large plaza is marked by the hexagonal tower that faces the Mission Street entrance. Several food services open to the premises. This is a great spot to stop of a meal or sit down and soak up some sun.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.394106248, "latitude" : 37.7936385670001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39411,37.79364]}" },
    { "name" : "Spear Street Plaza", "popos_addr" : "160 Spear St", "cartodb_id" : 46, "id_spur" : 36, "year_built" : 1983, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "160 Spear", "subject_to" : "No", "pic_file" : "Spear_Street_Plaza.jpg", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "Well landscaped walkway with seating and tables.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.393371115, "latitude" : 37.7915468460001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39337,37.79155]}" },
    { "name" : "199 Fremont St", "popos_addr" : "199 Fremont St", "cartodb_id" : 13, "id_spur" : 42, "year_built" : 2000, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "199 Fremont", "subject_to" : "Yes", "pic_file" : "199_FREMONT.JPG", "hours" : "Open at all times", "seating_no" : "Rock planter box seating. Approx 114 linear seats plus 17 iondividual rocks", "food_servi" : "CafÃ©", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "This large plaza space features extensive rock landscaping and artwork, designed in collaboration by Paul Kos, a conceptual sculptor, and Robert Haas, a poet and landscape architect. There are two adjoined areas, one of which has food service. The plaza is lined with birch trees, Sierra granite, and boulders at sitting height. The garden wall is engraved with a Haas poem and a fountain trickles in to a circular basin adding tranquility to the space.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39491, "latitude" : 37.7896700000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39491,37.78967]}" },
    { "name" : "560 Mission St", "popos_addr" : "560 Mission St", "cartodb_id" : 8, "id_spur" : 49, "year_built" : 2002, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "560 Mission", "subject_to" : "Yes", "pic_file" : "560_MISSION.jpg", "hours" : "Open at all times", "seating_no" : "45 chairs with 15 tables.134 linear seating onl ledges. 10 linear seats on benches", "food_servi" : "cafÃ©", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "This beautiful urban garden is accessible from both Mission and Jessie Streets. A tall bamboo grove transforms the surrounding concrete jungle to a more tranquil setting. Grass-coveredTerraced platforms, all at sitting height, step down toward a granite plaza filled with seating. Two cafes sit on the premise, making this a perfect lunch time spot. A shallow pool with a large kinetic sculpture adds to the allurement of the space.", "seating_an" : "Y", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39908, "latitude" : 37.7889200000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39908,37.78892]}" },
    { "name" : "555 Mission St", "popos_addr" : "555 Mission St", "cartodb_id" : 1, "id_spur" : 50, "year_built" : 2008, "rating_spur" : "Excellent", "transportation" : "", "type" : "plaza", "name_display" : "555 Mission", "subject_to" : "Yes", "pic_file" : "555 Mission.jpg", "hours" : "Open at all times", "seating_no" : "100 linear seats and benches.", "food_servi" : "Empty retail on the plaza", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "This large plaza has several art and landscaping features. It is located in front of 555 Mission Streets and runs along the west side of the building. There are several distinct sitting areas with different styles of seating.", "seating_an" : "Y", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39891, "latitude" : 37.7884, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39891,37.7884]}" },
    { "name" : "101 2nd St", "popos_addr" : "101 2nd St", "cartodb_id" : 12, "id_spur" : 51, "year_built" : 2000, "rating_spur" : "Excellent", "transportation" : "", "type" : "greenhouse", "name_display" : "101 Second", "subject_to" : "Yes", "pic_file" : "101_Second.jpg", "hours" : "8:00am - 6:00pm", "seating_no" : "25 linear seats on bench/ ledge. 23 tables, 69 chairs", "food_servi" : "CafÃ©", "restrooms" : "", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "This expansive five-story greenhouse features large trees, an abundance of natural light, and plenty of art. There are two balcony spaces with designer tables and chairs that overlook the enclosed open space. A cafe sits on the property and there is sometimes entertainment at noon for visitors to enjoy.", "seating_an" : "Y", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39953, "latitude" : 37.78803, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39953,37.78803]}" },
    { "name" : "Marathon Plaza", "popos_addr" : "303 Second St", "cartodb_id" : 37, "id_spur" : 55, "year_built" : "1980s", "rating_spur" : "Excellent", "transportation" : "", "type" : "plaza", "name_display" : "303 Second Street Plaza", "subject_to" : "Yes", "pic_file" : "Marathon Plaza_303 2nd St_Seating_Water Feature.JPG", "hours" : "Open at all times.", "seating_no" : "", "food_servi" : "Yes", "restrooms" : "", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "Large, triangular urban garden facing Second Street with a water feature, ample seating, and lush landscaping. Deli and restaurant open to the park provide food and additional seating.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.3957, "latitude" : 37.78522, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.3957,37.78522]}" },
    { "name" : "1 Bush Street", "popos_addr" : "1 Bush Street", "cartodb_id" : 72, "id_spur" : 18, "year_built" : 1959, "rating_spur" : "Excellent", "transportation" : "", "type" : "urban garden", "name_display" : "One Bush", "subject_to" : "No", "pic_file" : "One_bush.jpg", "hours" : "", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "N", "restroom" : "", "description" : "This Urban Garden provides a sunken space featuring a water fountain. Space is accessed with stairs from Bush Street and curved walkways from Market street.", "seating_an" : "N", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.400452567, "latitude" : 37.7909805410001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40045,37.79098]}" },
    { "name" : "1 Kearny St", "popos_addr" : "1 Kearny St", "cartodb_id" : 19, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "rooftop garden", "name_display" : "One Kearny", "subject_to" : "Yes", "pic_file" : "1_Kearny.jpg", "hours" : "", "seating_no" : "23 linear seats.", "food_servi" : "No", "restrooms" : "Yes", "food" : "", "seating" : "Y", "restroom" : "Y", "description" : "This rooftop terrace has extensive views of Market St. as well as rooftop architecture of nearby buildings. Landscaping and bench seating support this space.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40376, "latitude" : 37.7878400000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40376,37.78784]}" },
    { "name" : "120 Howard St", "popos_addr" : "120 Howard St", "cartodb_id" : 18, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "120 Howard", "subject_to" : "Yes", "pic_file" : "120 Howard.jpg", "hours" : "8AM - 6PM", "seating_no" : "None.", "food_servi" : "Cart", "restrooms" : "None", "food" : "Y", "seating" : "", "restroom" : "", "description" : "This space features plants along the entirety of the snippet and is served by an espresso cart.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39305, "latitude" : 37.79107, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39305,37.79107]}" },
    { "name" : "55 Second St - C", "popos_addr" : "55 Second St", "cartodb_id" : 22, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "55 Second Atrium", "subject_to" : "Yes", "pic_file" : "55 Second_Atrium.jpg", "hours" : "", "seating_no" : "", "food_servi" : "", "restrooms" : "", "food" : "", "seating" : "", "restroom" : "", "description" : "", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40041, "latitude" : 37.7891000000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40041,37.7891]}" },
    { "name" : "77 Van Ness Ave", "popos_addr" : "77 Van Ness Ave", "cartodb_id" : 24, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "77 Van Ness", "subject_to" : "Yes", "pic_file" : "77_VAN_NESS.JPG", "hours" : "", "seating_no" : "12 chairs w/ tables", "food_servi" : "No", "restrooms" : "No", "food" : "", "seating" : "Y", "restroom" : "", "description" : "This space is in the front lobby of 77 Van Ness. It has tables and chairs and features a sculpture.", "seating_an" : "Y", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.41971, "latitude" : 37.7761300000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.41971,37.77613]}" },
    { "name" : "Gap Building", "popos_addr" : "2 Folsom St", "cartodb_id" : 38, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Gap Building", "subject_to" : "Yes", "pic_file" : "2 Folsom.jpg", "hours" : "", "seating_no" : "76 seats", "food_servi" : "None", "restrooms" : "None marked", "food" : "", "seating" : "Y", "restroom" : "", "description" : "This is a large plaza with several seating areas. Art sculptures are featured along with diverse landscaping.", "seating_an" : "", "hours_type" : "Open At All Times", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.391211785, "latitude" : 37.791229851, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39121,37.79123]}" },
    { "name" : "Intercontinental Hotel_Bay Terrace", "popos_addr" : "888 Howard St", "cartodb_id" : 5, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Intercontinental Hotel - Bay Terrace", "subject_to" : "Yes", "pic_file" : "InterCont Hotel B_Bay Terrace1.JPG", "hours" : "9:00am - 5:00pm", "seating_no" : "49 chairs, 6 chaise lounge", "food_servi" : "None", "restrooms" : "Hotel. Could use the lobby restrooms", "food" : "", "seating" : "Y", "restroom" : "Y", "description" : "The Intercontinental Hotel provides two POPOS on the fourth and sixth floors. They have various seating arrangements and landscaping, each with views of the City.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40468, "latitude" : 37.7819700000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40468,37.78197]}" },
    { "name" : "Intercontinental Hotel_Pacific Terrace", "popos_addr" : "888 Howard St", "cartodb_id" : 6, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Intercontinental Hotel - Pacific Terrace", "subject_to" : "Yes", "pic_file" : "InterCont Hotel A_Pacific Terrace.JPG", "hours" : "9:00am - 5:00pm", "seating_no" : "Unknown - seating arranged for private event(s)", "food_servi" : "None", "restrooms" : "Hotel. Could use the lobby restrooms etc", "food" : "", "seating" : "", "restroom" : "Y", "description" : "The Intercontinental Hotel provides two POPOS on the fourth and sixth floors. They have various seating arrangements and landscaping, each with views of the City.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40483, "latitude" : 37.78189, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40483,37.78189]}" },
    { "name" : "Marriott Courtyard - A (Starbucks)", "popos_addr" : "299 2nd St", "cartodb_id" : 9, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Marriot Courtyard Snippet", "subject_to" : "Yes", "pic_file" : "Marriot Courtyard_299 2nd St_Snippet_street level.JPG", "hours" : "8:00am - 5:00pm", "seating_no" : "It appears that one bench near the entrance on 2nd Street is meant to meet this requirement. Per Thayer: 12 linear seats by bench.", "food_servi" : "cafÃ©", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "Thayer referenced something that is not part of the open space requirement, this is pedestrian improvement requirement. Per Thayer: This open space has benches and landscaping along the sidewalk on Folsom at street level.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39684, "latitude" : 37.7857700000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39684,37.78577]}" },
    { "name" : "Marriott Courtyard - C", "popos_addr" : "299 2nd St", "cartodb_id" : 11, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Marriot Courtyard", "subject_to" : "Yes", "pic_file" : "Marriot Courtyard_299 2nd St_Snippet_cafe level.JPG", "hours" : "", "seating_no" : "42 chairs with tables", "food_servi" : "Restaurant service nearby, starbucks outside", "restrooms" : "Yes, hotel", "food" : "Y", "seating" : "Y", "restroom" : "Y", "description" : "This space features extensive landscaping with several art attractions. Comfortable seating arrangements are located throughout the space. Food service nearby inside the hotel.", "seating_an" : "Y", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39669, "latitude" : 37.7861100000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39669,37.78611]}" },
    { "name" : "Millenium Tower Plaza", "popos_addr" : "301 Mission St", "cartodb_id" : 23, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Millenium Tower Plaza", "subject_to" : "Yes", "pic_file" : "301_Mission.jpg", "hours" : "8:00am - 6:00pm", "seating_no" : "24 linear seats", "food_servi" : "Yes", "restrooms" : "Yes", "food" : "Y", "seating" : "Y", "restroom" : "Y", "description" : "This atrium features extensive artwork and is served by a bar/restaurant on the premises. It has various types of seating with tables, and high windows overhead.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39656, "latitude" : 37.7905200000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39656,37.79052]}" },
    { "name" : "Rincon Center", "popos_addr" : "121 Spear St", "cartodb_id" : 29, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Rincon Center", "subject_to" : "Yes", "pic_file" : "121_Spear.jpg", "hours" : "", "seating_no" : "78 on benches and chairs. Also, the cafÃ© provides some of its own seating.", "food_servi" : "CafÃ©", "restrooms" : "None", "food" : "Y", "seating" : "Y", "restroom" : "", "description" : "This large plaza space is found in the interior courtyard between Rincon Center 1 and Rincon Center 2. It features several art sculptures and different types of seating.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.39259, "latitude" : 37.7920800000001, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.39259,37.79208]}" },
    { "name" : "Westfield Sky Terrace (Wesfield Center Mall)", "popos_addr" : "845 Market St", "cartodb_id" : 33, "id_spur" : 0, "year_built" : "", "rating_spur" : "", "transportation" : "", "type" : "", "name_display" : "Westfield Sky Terrace", "subject_to" : "Yes", "pic_file" : "845 Market.jpg", "hours" : "", "seating_no" : "59 chairs, 10 linear seats", "food_servi" : "None, but food on the premises", "restrooms" : "None, but public restrooms downstairs", "food" : "Y", "seating" : "Y", "restroom" : "Y", "description" : "This extensive 9th floor rooftop space looks onto the dome of the mall and has views westward and sunlight. It does not have direct food service, but food may be found in the food court below in the mall.", "seating_an" : "", "hours_type" : "Open Business Hours", "created_at" : "26:07", "updated_at" : "19:39", "longitude" : -122.40652, "latitude" : 37.78473, "geojson" : "{\"type\":\"Point\",\"coordinates\":[-122.40652,37.78473]}" }
    */

    var walkpath = [
      new L.LatLng(37.7951184623911, -122.40214169025421),
      new L.LatLng(37.794783580481706, -122.40209341049193),
      new L.LatLng(37.794859882822436, -122.4014925956726),
      new L.LatLng(37.794406306638834, -122.40141212940217),
      new L.LatLng(37.79432576478241, -122.40227580070496),
      new L.LatLng(37.7938679462461, -122.40219533443451),
      new L.LatLng(37.79397816207892, -122.40132093429564),
      new L.LatLng(37.79265556123338, -122.40103662014006),
      new L.LatLng(37.79280817023158, -122.3998886346817),
      new L.LatLng(37.79222316736003, -122.39974915981291),
      new L.LatLng(37.79231218983492, -122.39914834499358),
      new L.LatLng(37.79277849628437, -122.39926099777222),
      new L.LatLng(37.792816648500015, -122.3987030982971),
      new L.LatLng(37.793342299242944, -122.39880502223969),
      new L.LatLng(37.79337621206568, -122.39857971668242),
      new L.LatLng(37.792659800376455, -122.39749073982237),
      new L.LatLng(37.79351186320097, -122.39761412143706),
      new L.LatLng(37.79363055774002, -122.3978340625763),
      new L.LatLng(37.793723817601254, -122.39749073982237),
      new L.LatLng(37.79345251585992, -122.39735662937164)
    ];

    var poposMarker = {
      default : L.icon({
        iconUrl: 'images/poposmarkerblue.png',
        shadowUrl: 'images/marker-shadow.png',
        iconAnchor: new L.Point(23, 60)
      }),
      selected : L.icon({
        iconUrl: 'images/poposmarkergreen.png',
        shadowUrl: 'images/marker-shadow.png',
        iconAnchor: new L.Point(23, 60)
      })
    };

    document.popos = [];

    $('.arrows .leftArrow').on('click', function() {
      if (document.poposindex >= 1) {
        setCurrentPopos( document.poposindex - 1 );
      }
    });

    $('.arrows .rightArrow').click(function() {
      if (document.poposindex >= 0 && document.poposindex < document.popos.length - 1) {
        setCurrentPopos( document.poposindex + 1 );
      }
    });

    var setCurrentPopos = function(idx) {
      document.poposindex = idx;

      if (document.poposindex + 1 == document.popos.length) {
        $('.rightArrow').css('color', 'white');
      } else {
        $('.rightArrow').css('color', '');
      }

      if (document.poposindex <= 0) {
        $('.leftArrow').css('color', 'white');
      } else {
        $('.leftArrow').css('color', '');
      }

      var popo = document.popos[idx];

      // reset other popos icons
      _.forEach(document.popos, function(popo) {
        popo.setIcon(poposMarker.default);
      });

      // set default icon
      popo.setIcon(poposMarker.selected);
      var popupsnippet = '<img src=images/popup' + (1 + idx).toString() + '.png>';

      $('#detailview').html(popupsnippet);
      map.fitBounds(document.polyline.getBounds());
    };

    return {
      data : data,
      points : function() {
        return _.map(data, function(d) {
          return new L.LatLng(d.latitude, d.longitude);
        });
      },
      popups : function() {

        _.forEach(data, function(d,index) {

          var marker = L.marker([d.latitude, d.longitude], { icon: poposMarker.default });
          document.popos[index] = marker;
          marker.addTo(map);
          marker.on('click', function(e) {
            setCurrentPopos(index);
          });
        });
      },
      walkpath : walkpath,
      setCurrentPopos : setCurrentPopos
    };
  }
})();
