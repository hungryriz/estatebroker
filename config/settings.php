<?php

return [

    /*
    |--------------------------------------------------------------------------
    | View Storage Paths
    |--------------------------------------------------------------------------
    |
    | Most templating systems load templates from disk. Here you may specify
    | an array of paths that should be checked for your views. Of course
    | the usual Laravel view path has already been registered for you.
    |
    */
    'admin' => [
    	'sidebar' => [
    		'navigation' => [
    			'links' => [
	    			'activities.index' => 'Activities',
	    			'agents.index' => 'Agents',
	    			'deals.index' => 'Deals',
	    			'interests.index' => 'Interests',
	    			'listings.index' => 'Listings',
	    			'parties.index' => 'Parties',
    			]
    		]
		]
    ],
];