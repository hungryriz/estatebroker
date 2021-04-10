const cities = [
    { faisalabad: ['abdullah pur', 'madina town', 'rehman garden', 'jhaal', 'mai di chuggi', 'bolay di chuggi', ] },
    { lahore: ['minar e pakistan', 'ejab ghar', 'universiety road', 'baghe jinah', 'border', ''] },
    { multan: ['multan minar e pakistan', 'multan ejab ghar', 'multan universiety road', 'multan baghe jinah', 'multan border'] },
    { gujrat: ['gujrat minar e pakistan', 'gujrat ejab ghar', 'gujrat universiety road', 'gujrat baghe jinah', 'gujrat border'] },
    { sarghoda: ['sarghoda minar e pakistan', 'sarghoda ejab ghar', 'sarghoda universiety road', 'sarghoda baghe jinah', 'sarghoda border'] },
    { bahalpur: ['bahalpur minar e bahalpur', 'bahalpur ejab ghar', 'bahalpur universiety road', 'bahalpur baghe jinah', 'bahalpur border'] },
]



const default_house_features = {
    'Main Features': {
        built_in_year: { title: 'Built in year', type: 'TextField'},
        view: { title: 'View', type: 'TextField'},
        parking_spaces: { title: 'Parking Spaces', type: 'TextField'},
        double_glazed_windows: { title: 'Double Glazed Windows', type: 'Checkbox'},
        central_air_conditioning: { title: 'Central Air Conditioning', type: 'Checkbox'},
        central_heating: { title: 'Central Heating', type: 'Checkbox'},
        flooring: { title: 'Flooring', type: 'Select', options: {tiles: 'Tiles', marble: 'Marble', wooden: 'Wooden', chip: 'Chip', cement: 'Cement', other: 'Other' }},
        electricity_backup: { title: 'Electricity Backup', type: 'Select', options: {none: 'None', ups: 'Ups', generator: 'Generator', solar: 'Solar', other: 'Other' }},
        waste_disposal: { title: 'Waste Disposal', type: 'Checkbox'},
        floors: { title: 'Floors', type: 'TextField'},
        other_main_features: { title: 'Other Main Features', type: 'TextField'},
        furnished: { title: 'Furnished', type: 'Checkbox'},
    },
    'Business and Communication': {
        broadband_internet_access: { title: 'Broadband Internet Access', type: 'Checkbox'},
        satellite_or_cable_tv_ready: { title: 'Satellite or Cable TV Ready', type: 'Checkbox'},
        intercom: { title: 'Intercom', type: 'Checkbox'},
        other_business_and_communication_facilities: { title: 'Other Business and Communication Facilities', type: 'TextField'},
    },
    'Nearby Locations and Other Facilities': {
        nearby_schools: { title: 'Nearby Schools', type: 'TextField'},
        nearby_hospitals: { title: 'Nearby Hospitals', type: 'TextField'},
        nearby_shopping_malls: { title: 'Nearby Shopping Malls', type: 'TextField'},
        nearby_restaurants: { title: 'Nearby Restaurants', type: 'TextField'},
        distance_from_airport_kms: { title: 'Distance From Airport (kms)', type: 'TextField'},
        nearby_public_transport_service: { title: 'Nearby Public Transport Service', type: 'TextField'},
        other_nearby_places: { title: 'Other Nearby Places', type: 'TextField'},
    },
    'Rooms': {
        bedrooms: { title: 'Bedrooms', type: 'TextField'},
        bathrooms: { title: 'Bathrooms', type: 'TextField'},
        servant_quarters: { title: 'Servant Quarters', type: 'TextField'},
        drawing_room: { title: 'Drawing Room', type: 'Checkbox'},
        dining_room: { title: 'Dining Room', type: 'Checkbox'},
        kitchens: { title: 'Kitchens', type: 'TextField'},
        study_room: { title: 'Study Room', type: 'Checkbox'},
        prayer_room: { title: 'Prayer Room', type: 'Checkbox'},
        powder_room: { title: 'Powder Room', type: 'Checkbox'},
        gym: { title: 'Gym', type: 'Checkbox'},
        store_rooms: { title: 'Store Rooms', type: 'TextField'},
        steam_room: { title: 'Steam Room', type: 'Checkbox'},
        lounge_or_sitting_room: { title: 'Lounge or Sitting Room', type: 'Checkbox'},
        laundry_room: { title: 'Laundry Room', type: 'Checkbox'},
        other_rooms: { title: 'Other Rooms', type: 'TextField'},
    },
    'Healthcare Recreational': {
        bedrooms: { title: 'Lawn or Garden', type: 'TextField'},
        bathrooms: { title: 'Swimming Pool', type: 'TextField'},
        servant_quarters: { title: 'Sauna', type: 'TextField'},
        drawing_room: { title: 'Jacuzzi', type: 'Checkbox'},
        other_healthcare_and_recreation_facilities: { title: 'Other Healthcare and Recreation Facilities', type: 'TextField'},
    },
    'Other Facilities': {
        maintenance_staff: { title: 'Maintenance Staff', type: 'Checkbox'},
        security_staff: { title: 'Security Staff', type: 'Checkbox'},
        facilities_for_disabled: { title: 'Facilities for Disabled', type: 'Checkbox'},
        other_facilities: { title: 'Other Facilities', type: 'TextField'},
    }
}

const default_plot_features = {
    'Plot Features': {
        possesion: { title: 'Possesion', type: 'Checkbox'},
        corner: { title: 'Corner', type: 'Checkbox'},
        park_facing: { title: 'Park Facing', type: 'Checkbox'},
        disputed: { title: 'Disputed', type: 'Checkbox'},
        file: { title: 'File', type: 'Checkbox'},
        balloted: { title: 'Balloted', type: 'Checkbox'},
        sewerage: { title: 'Sewerage', type: 'Checkbox'},
        electricity: { title: 'Electricity', type: 'Checkbox'},
        water_supply: { title: 'Water Supply', type: 'Checkbox'},
        sui_gas: { title: 'Sui Gas', type: 'Checkbox'},
        boundary_wall: { title: 'Boundary Wall', type: 'Checkbox'},
        other_plot_features: { title: 'Other Plot Features', type: 'TextField'},

    },
    'Nearby Locations and Other Facilities': {
        nearby_schools: { title: 'Nearby Schools', type: 'TextField'},
        nearby_hospitals: { title: 'Nearby Hospitals', type: 'TextField'},
        nearby_shopping_malls: { title: 'Nearby Shopping Malls', type: 'TextField'},
        nearby_restaurants: { title: 'Nearby Restaurants', type: 'TextField'},
        distance_from_airport_kms: { title: 'Distance From Airport (kms)', type: 'TextField'},
        nearby_public_transport_service: { title: 'Nearby Public Transport Service', type: 'TextField'},
        other_nearby_places: { title: 'Other Nearby Places', type: 'TextField'},
    },
    'Other Facilities': {
        security_staff: { title: 'Security Staff', type: 'Checkbox'},
        facilities_for_disabled: { title: 'Facilities for Disabled', type: 'Checkbox'},
        other_facilities: { title: 'Other Facilities', type: 'TextField'},
    }
}


const default_agriculture_features = {
    'Plot Features': {
        possesion: { title: 'Possesion', type: 'Checkbox'},
        disputed: { title: 'Disputed', type: 'Checkbox'},
        sewerage: { title: 'Sewerage', type: 'Checkbox'},
        electricity: { title: 'Electricity', type: 'Checkbox'},
        water_supply: { title: 'Water Supply', type: 'Checkbox'},
        sui_gas: { title: 'Sui Gas', type: 'Checkbox'},
        irrigation: { title: 'Irrigation', type: 'Checkbox'},
        tube_wells: { title: 'Accessible by Road', type: 'Checkbox'},
        accessible_by_road: { title: 'Accessible by Road', type: 'Checkbox'},
        perimeter_fencing: { title: 'Perimeter Fencing', type: 'Checkbox'},
        land_fertility: { title: 'Land Fertility', type: 'Checkbox'},
        boundary_lines: { title: 'Boundary Lines', type: 'Checkbox'},
        nearby_water_resources: { title: 'Nearby Water Resources', type: 'TextField'},
        other_land_features: { title: 'Other Land Features', type: 'TextField'}
    },
    'Nearby Locations and Other Facilities': {
        nearby_schools: { title: 'Nearby Schools', type: 'TextField'},
        nearby_hospitals: { title: 'Nearby Hospitals', type: 'TextField'},
        nearby_shopping_malls: { title: 'Nearby Shopping Malls', type: 'TextField'},
        nearby_restaurants: { title: 'Nearby Restaurants', type: 'TextField'},
        distance_from_airport_kms: { title: 'Distance From Airport (kms)', type: 'TextField'},
        nearby_public_transport_service: { title: 'Nearby Public Transport Service', type: 'TextField'},
        other_nearby_places: { title: 'Other Nearby Places', type: 'TextField'},
    },
    'Other Facilities': {
        security_staff: { title: 'Security Staff', type: 'Checkbox'},
        other_facilities: { title: 'Other Facilities', type: 'TextField'},
    }
}


const default_flat_features = {
    'Main Features': {
        built_in_year: { title: 'Built in year', type: 'TextField'},
        view: { title: 'View', type: 'TextField'},
        parking_spaces: { title: 'Parking Spaces', type: 'TextField'},
        lobby_in_building: { title: 'Lobby in Building', type: 'Checkbox'},
        double_glazed_windows: { title: 'Double Glazed Windows', type: 'Checkbox'},
        central_air_conditioning: { title: 'Central Air Conditioning', type: 'Checkbox'},
        central_heating: { title: 'Central Heating', type: 'Checkbox'},
        flooring: { title: 'Flooring', type: 'Select', options: {tiles: 'Tiles', marble: 'Marble', wooden: 'Wooden', chip: 'Chip', cement: 'Cement', other: 'Other' }},
        electricity_backup: { title: 'Electricity Backup', type: 'Select', options: {none: 'None', ups: 'Ups', generator: 'Generator', solar: 'Solar', other: 'Other' }},
        waste_disposal: { title: 'Waste Disposal', type: 'Checkbox'},
        floor: { title: 'Floor', type: 'TextField'},
        floors_in_building: { title: 'Floors in Building', type: 'TextField'},
        elevators: { title: 'Elevators', type: 'TextField'},
        service_elevators_in_building: { title: 'Service Elevators in Building', type: 'Checkbox'},
        other_main_features: { title: 'Other Main Features', type: 'TextField'},
        furnished: { title: 'Furnished', type: 'Checkbox'},
    },
    'Business and Communication': {
        broadband_internet_access: { title: 'Broadband Internet Access', type: 'Checkbox'},
        satellite_or_cable_tv_ready: { title: 'Satellite or Cable TV Ready', type: 'Checkbox'},
        business_center_or_media_room_in_building: { title: 'Business Center or Media Room in Building', type: 'Checkbox'},
        conference_room_in_building: { title: 'Conference Room in Building', type: 'Checkbox'},
        intercom: { title: 'Intercom', type: 'Checkbox'},
        atm_machines: { title: 'ATM Machines', type: 'Checkbox'},
        other_business_and_communication_facilities: { title: 'Other Business and Communication Facilities', type: 'TextField'},
    },
    'Nearby Locations and Other Facilities': {
        nearby_schools: { title: 'Nearby Schools', type: 'TextField'},
        nearby_hospitals: { title: 'Nearby Hospitals', type: 'TextField'},
        nearby_shopping_malls: { title: 'Nearby Shopping Malls', type: 'TextField'},
        nearby_restaurants: { title: 'Nearby Restaurants', type: 'TextField'},
        distance_from_airport_kms: { title: 'Distance From Airport (kms)', type: 'TextField'},
        nearby_public_transport_service: { title: 'Nearby Public Transport Service', type: 'TextField'},
        other_nearby_places: { title: 'Other Nearby Places', type: 'TextField'},
    },
    'Rooms': {
        bedrooms: { title: 'Bedrooms', type: 'TextField'},
        bathrooms: { title: 'Bathrooms', type: 'TextField'},
        servant_quarters: { title: 'Servant Quarters', type: 'TextField'},
        drawing_room: { title: 'Drawing Room', type: 'Checkbox'},
        dining_room: { title: 'Dining Room', type: 'Checkbox'},
        kitchens: { title: 'Kitchens', type: 'TextField'},
        study_room: { title: 'Study Room', type: 'Checkbox'},
        prayer_room: { title: 'Prayer Room', type: 'Checkbox'},
        powder_room: { title: 'Powder Room', type: 'Checkbox'},
        gym: { title: 'Gym', type: 'Checkbox'},
        store_rooms: { title: 'Store Rooms', type: 'TextField'},
        steam_room: { title: 'Steam Room', type: 'Checkbox'},
        lounge_or_sitting_room: { title: 'Lounge or Sitting Room', type: 'Checkbox'},
        laundry_room: { title: 'Laundry Room', type: 'Checkbox'},
        other_rooms: { title: 'Other Rooms', type: 'TextField'},
    },
    'Healthcare Recreational': {
        bedrooms: { title: 'Lawn or Garden', type: 'TextField'},
        bathrooms: { title: 'Swimming Pool', type: 'TextField'},
        servant_quarters: { title: 'Sauna', type: 'TextField'},
        drawing_room: { title: 'Jacuzzi', type: 'Checkbox'},
        other_healthcare_and_recreation_facilities: { title: 'Other Healthcare and Recreation Facilities', type: 'TextField'},
    },
    'Other Facilities': {
        maintenance_staff: { title: 'Maintenance Staff', type: 'Checkbox'},
        security_staff: { title: 'Security Staff', type: 'Checkbox'},
        facilities_for_disabled: { title: 'Facilities for Disabled', type: 'Checkbox'},
        pet_policy: { title: 'Pet Policy', type: 'Select', options: {Allowed: 'Allowed', 'Not Allowed': 'Not Allowed' }},
        other_facilities: { title: 'Other Facilities', type: 'TextField'},
    }
}



const types = {
    owner: {
        sale: {
            homes: { 
                house: default_house_features,
                flat: default_flat_features,
                'upper portion': default_house_features, 
                'lower portion': default_house_features, 
                'farm house': default_house_features, 
                'room': {},
                'penthouse': {}
            },
            plots:{
                'residential plot': default_plot_features, 
                'commercial plot': default_plot_features, 
                'agricultural land': default_agriculture_features, 
                'industrial land': {}, 
                'plot file': {}, 
                'plot form':{}
            },
            commercial: {
                office: default_flat_features, 
                shop: default_flat_features, 
                warehouse: default_flat_features, 
                factory: default_flat_features, 
                building: default_flat_features, 
                other: {}
            }
        },
        rent: {
            homes:{ 
                house: default_house_features,
                flat: default_flat_features,
                'upper portion': default_house_features, 
                'lower portion': default_house_features, 
                'farm house': default_house_features, 
                'room': {},
                'penthouse': {}
            },
            plots:{
                'residential plot': default_plot_features, 
                'commercial plot': default_plot_features, 
                'agricultural land': default_agriculture_features, 
                'industrial land': {}, 
                'plot file': {}, 
                'plot form':{}
            },
            commercial: {
                office: default_flat_features, 
                shop: default_flat_features, 
                warehouse: default_flat_features, 
                factory: default_flat_features, 
                building: default_flat_features, 
                other: {}
            }
        },
    },
    wanted: {
        buy: { 
            homes: { 
                house: default_house_features,
                flat: default_flat_features,
                'upper portion': default_house_features, 
                'lower portion': default_house_features, 
                'farm house': default_house_features, 
                'room': {},
                'penthouse': {}
            },
            plots:{
                'residential plot': default_plot_features, 
                'commercial plot': default_plot_features, 
                'agricultural land': default_agriculture_features, 
                'industrial land': {}, 
                'plot file': {}, 
                'plot form':{}
            },
            commercial: {
                office: default_flat_features, 
                shop: default_flat_features, 
                warehouse: default_flat_features, 
                factory: default_flat_features, 
                building: default_flat_features, 
                other: {}
            }
        },
        rent: {
            homes: { 
                house: default_house_features,
                flat: default_flat_features,
                'upper portion': default_house_features, 
                'lower portion': default_house_features, 
                'farm house': default_house_features, 
                'room': {},
                'penthouse': {}
            },
            plots:{
                'residential plot': default_plot_features, 
                'commercial plot': default_plot_features, 
                'agricultural land': default_agriculture_features, 
                'industrial land': {}, 
                'plot file': {}, 
                'plot form':{}
            },
            commercial: {
                office: default_flat_features, 
                shop: default_flat_features, 
                warehouse: default_flat_features, 
                factory: default_flat_features, 
                building: default_flat_features, 
                other: {}
            }
        }
    }
}

export { cities, types } 