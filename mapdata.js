var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    GEAB: {
      name: "Abkhazia",
      description: "Beautiful Seaside Region of the culture - currently occupied by Ruzzia",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GEAJ: {
      name: "Ajaria",
      description: "You want to spend your summer here, Trust me!",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GEGU: {
      name: "Guria",
      description: "Known as the people who talk REALLY fast",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GEIM: {
      name: "Imereti",
      description: "The second heart of the Georgia-Kutaisi",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GEKA: {
      name: "Kakheti",
      description: "Wine Here is just ANOTHER LEVEL",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GEKK: {
      name: "Kvemo Kartli",
      description: "NAZUQI",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GEMM: {
      name: "Mtskheta-Mtianeti",
      description: "Mountain people - eat khinkali there and thank me later",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GERL: {
      name: "Racha-Lechkhumi-Kvemo Svaneti",
      description: "You don't want to mess with them (trust me)",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GESJ: {
      name: "Samtskhe-Javakheti",
      description: "Rabati castle, Amazing Food, POTATOES",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GESK: {
      name: "Shida Kartli",
      description: "RUSSIA HATE",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GESZ: {
      name: "Samegrelo-Zemo Svaneti",
      description: "MODEL BEAUTY PEOPLE, FOOD? ANOTHER LEVEL",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GETB: {
      name: "Tbilisi",
      description: "the capital of the country",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Tbilisi",
      lat: "41.694113",
      lng: "44.833682"
    }
  },
  labels: {
    GEAB: {
      name: "Abkhazia",
      parent_id: "GEAB"
    },
    GEAJ: {
      name: "Ajaria",
      parent_id: "GEAJ"
    },
    GEGU: {
      name: "Guria",
      parent_id: "GEGU"
    },
    GEIM: {
      name: "Imereti",
      parent_id: "GEIM"
    },
    GEKA: {
      name: "Kakheti",
      parent_id: "GEKA"
    },
    GEKK: {
      name: "Kvemo Kartli",
      parent_id: "GEKK"
    },
    GEMM: {
      name: "Mtskheta-Mtianeti",
      parent_id: "GEMM"
    },
    GERL: {
      name: "Racha-Lechkhumi-Kvemo Svaneti",
      parent_id: "GERL"
    },
    GESJ: {
      name: "Samtskhe-Javakheti",
      parent_id: "GESJ"
    },
    GESK: {
      name: "Shida Kartli",
      parent_id: "GESK"
    },
    GESZ: {
      name: "Samegrelo-Zemo Svaneti",
      parent_id: "GESZ"
    },
    GETB: {
      name: "Tbilisi",
      parent_id: "GETB"
    }
  }
};