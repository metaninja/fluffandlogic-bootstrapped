// ------------- BFF Global Object -----------------
// bff is our global object for BFF
var bff = {};


// ------------- BFF Redirect Mappings -----------------
// This is our list of old pages
// that might still be linked from TeamForge,
// and their new URLs
bff.redirect = [
    {
        'old' : '#/UserMgmt_BasicSearch.html',
        'new' : '#/pages/manage/users/'
    },
    {
        'old' : '#/InmateMgmt_BasicSearch.html',
        'new' : '#/pages/search/inmates/'
    },
    {
        'old' : '#/Inmate_Profile.html',
        'new' : '#/pages/search/inmates/profile/'
    },
    {
        'old' : '#/Inmate_Profile_Edit.html',
        'new' : '#/pages/search/inmates/profile/edit/'
    },
    {
        'old' : '#/Virtual_Group_List.html',
        'new' : '#/pages/manage/call-settings/virtual-groups/'
    },
    {
        'old' : '#/Visitors.html',
        'new' : '#/pages/manage/visitors/'
    },
    {
        'old' : '#/Visitor_Profile.html',
        'new' : '#/pages/manage/visitors/edit/'
    },
    {
        'old' : '#/Phone_SearchManagedNumbers.html',
        'new' : '#/pages/manage/phone-numbers/managed-numbers/'
    },
    {
        'old' : '#/Edit_PhoneNumber.html',
        'new' : '#/pages/manage/phone-numbers/managed-numbers/add/'
    },
    {
        'old' : '#/Phone_SearchBlockedNumbers.html',
        'new' : '#/pages/manage/phone-numbers/blocked-numbers/'
    },
    {
        'old' : '#/Block_PhoneNumber.html',
        'new' : '#/pages/manage/phone-numbers/blocked-numbers/add/'
    },
    {
        'old' : '#/Virtual_Group.html',
        'new' : '#/pages/manage/visits/'
    },
    {
        'old' : '#/CDRSearch.html',
        'new' : '#/pages/search/communication/advanced.html'
    },
    {
        'old' : '#/CDRSearch_Basic.html',
        'new' : '#/pages/search/communication/'
    },
    {
        'old' : '#/CDRSearchResults_Basic.html',
        'new' : '#/pages/search/communication/results/'
    },
    {
        'old' : '#/LBS.html',
        'new' : '#/pages/investigate/lbs/'
    },
    {
        'old' : '#/LBS-Add_Geofence.html',
        'new' : '#/pages/investigate/lbs/add/'
    },
    {
        'old' : '#/Logging.html',
        'new' : '#/pages/search/system-logs/'
    },
    {
        'old' : '#/Dashboard.html',
        'new' : '#/pages/dashboard/'
    },
    {
        'old' : '#/MonitorActivity.html',
        'new' : '#/pages/monitor/'
    },
    {
        'old' : '#/Facility_Detail.html',
        'new' : '#/pages/manage/facility-and-sites/facility/'
    },
    {
        'old' : '#/Site_Detail.html',
        'new' : '#/pages/manage/facility-and-sites/sites/'
    },
    {
        'old' : '#/TerminalGroup_Detail.html',
        'new' : '#/pages/manage/facility-and-sites/terminal-groups/'
    },
    {
        'old' : '#/Terminal_Detail.html',
        'new' : '#/pages/manage/facility-and-sites/terminals/'
    },
    {
        'old' : '#/Visit_Scheduling-Create_Schedule.html',
        'new' : '#/pages/manage/visit-settings/visit-schedules/add/'
    },
    {
        'old' : '#/Visit_Scheduling.html',
        'new' : '#/pages/manage/visit-settings/visit-schedules/'
    },
    {
        'old' : '#/Visit_Restrictions.html',
        'new' : '#/pages/manage/visit-settings/visit-restrictions/add/'
    },
    {
        'old' : '#/Visit_Restriction_List.html',
        'new' : '#/pages/manage/visit-settings/visit-restrictions/'
    },
    {
        'old' : '#/Call_Scheduling-Create_Schedule.html',
        'new' : '#/pages/manage/call-settings/call-schedules/add'
    },
    {
        'old' : '#/Grievance_Search.html',
        'new' : '#/pages/manage/grievances/'
    },
    {
        'old' : '#/Grievance_Detail.html',
        'new' : '#/pages/manage/grievances/view/'
    },
    {
        'old' : '#/Grievance_Admin.html',
        'new' : '#/pages/manage/grievances/admin/'
    },
    {
        'old' : '#/MyProfile_Detail.html',
        'new' : '#/pages/profile/'
    },
    {
        'old' : '#/Commissary_Admin.html',
        'new' : '#/pages/manage/commissary/admin/'
    },
    {
        'old' : '#/Commissary_Search.html',
        'new' : '#/pages/manage/commissary/'
    },
    {
        'old' : '#/SickCall_Search.html',
        'new' : '#/pages/manage/sick-calls/'
    },
    {
        'old' : '#/SickCall_Admin.html',
        'new' : '#/pages/manage/sick-calls/admin/'
    },
    {
        'old' : '#/Manage_Roles.html',
        'new' : '#/pages/manage/security-roles/'
    },
    {
        'old' : '#/CreateRole.html',
        'new' : '#/pages/manage/security-roles/add/'
    },
    {
        'old' : '#/EditRole.html',
        'new' : '#/pages/manage/security-roles/edit/'
    },
    {
        'old' : '#/UX_Guidelines.html',
        'new' : '#/pages/ux/'
    },
    {
        'old' : '#/UserStoryChecklist.html',
        'new' : '#/pages/ux/user-story-checklist.html'
    },
    {
        'old' : '#/SystemFeedback.html',
        'new' : '#/pages/ux/system-feedback.html'
    }
];


bff.override = function() {
    $('.enable-override').addClass('visible');
    $('.remove-override').removeClass('visible');
    $('.override-control').attr('disabled', 'disabled');

    $('.override-group .enable-override').click(function() {
        var that = this;
        var overrideGroup = $(that).parents('.override-group');
        $(that).removeClass('visible');
        overrideGroup.find('.remove-override').addClass('visible');
        overrideGroup.find('.override-control').removeAttr('disabled');
    });

    $('.override-group .remove-override').click(function() {
        var that = this;
        var overrideGroup = $(that).parents('.override-group');
        $(that).removeClass('visible');
        overrideGroup.find('.enable-override').addClass('visible');
        overrideGroup.find('.override-control').attr('disabled','disabled');
    });
};


bff.devMode = function() {
    if ($('.dev-mode-on').hasClass('visible')) {
        $('.dev').addClass('visible');
    }
    else {
        $('.dev').removeClass('visible');
    }
};

bff.devModeLink = function() {
    $('.dev-mode-link').click(function() {

        if ($('.dev-mode-off').hasClass('visible')) {
            $('.dev-mode-on').addClass('visible');
            $('.dev-mode-off').removeClass('visible');
            $('.dev').addClass('visible');
        } else {
            $('.dev-mode-off').addClass('visible');
            $('.dev-mode-on').removeClass('visible');
            $('.dev').removeClass('visible');
        }
    });
};


bff.securusMode = function() {
    if ($('.securus-admin-mode-on').hasClass('visible')) {
        $('.securus-admin').addClass('visible');
    }
    else {
        $('.securus-admin').removeClass('visible');
    }
};


var scriptUrl = function() {
    var scripts = document.getElementsByTagName('script');

    for (var i=0; i<scripts.length; i ++)
    {
        var script = scripts[i].getAttribute('src');
        if (script.indexOf('bff.js') > -1) {
            return script.substr(0, script.lastIndexOf('/') + 1);
        }
    }
};



// ------------- Main App Loader -----------------
// This is like a stripped down MVC framework,
// only with M and the C :-). Just a V (for view).
// To view a page go to http://localhost:8080/url/of/this/app/#/Filename.html
// Remember the URL is relative to index.html
// -----------------------------------------------



// ------------------ BFF Inception ------------------
//  Let's you nest components inside other components
// ---------------------------------------------------
bff.Inception = function(inceptionSelector) {

    var loadUrl = function(selector) {
        var srcUrl = $(selector).data('src');
        var srcEvent = $(selector).data('event');

        $(this).removeAttr('data-src');

        //insert the contents of the URL into the BFFInception or BffInclude class ...
        $.get(srcUrl, function(srcData) {

            //console.log(srcUrl); //DEBUGGING ONLY


            $(selector).html(srcData);


            //Disable href="#" to prevent accidental redirects to the bff startPage
            $('a[href="#"]').click(function(e) {
                e.preventDefault();
            });


            //Activate Bootstrap tooltips
            $(function () {
                $('[data-toggle="tooltip"]').tooltip({placement: "bottom"});
            });


            //Developer mode
            bff.devMode();


            //Show/hide Securus Admin mode sections
            bff.securusMode();


            // ... and trigger a custom Event so the view can listen and make any updates
            if (srcEvent) {
                $(selector).trigger(srcEvent);
            }

            // Now recursively load any nested bff-includes
            $(selector).find('.bff-include').each(function() {
                loadUrl(this);
            });
        });
    };

    if (inceptionSelector) {
        loadUrl(inceptionSelector);
    }
    else {
        $('.bff-include').each(function() {
            loadUrl(this);
        });
    }

};


// ---------------------- BFF Templates ------------------------
//     Load BFF's own HTML files, including error messages
//    Uses scriptUrl to find the Url of the Javascript file
// -------------------------------------------------------------
bff.loadBffTemplates = function() {
    var templateUrl = scriptUrl() + 'bff.html';
    $.get(templateUrl, function(data) {
        $('.bff-view').after(data);
        $('.page-load.page-busy').hide();
        $('.page-load.page-error').hide();
    });
};


// ---------------------- BFF Hash Changed ---------------------
//           Load a default page specified in
// <div class="bff-view" data-start-page="StartPage.html"></div>
// -------------------------------------------------------------
bff.startPage = $('.bff-view').data('start-page');
if (!bff.startPage) {
    bff.startPage = 'Home.html';
}


// ------------------ BFF Hash Changed ------------------
//      Handle user clicking on a link to another page
//               in the BFF app/wireframes
// ------------------------------------------------------
bff.hashChanged = function() {

    $('.page-load').hide();
    $('.page-load.page-busy').slideDown(300);


    // If the hash is empty, then load the start page.
    var hashUrl = window.location.hash || bff.startPage;


    // If the request is for an old URL (say from a TeamForge story) that's been refactored,
    // go to it's new location
    if (hashUrl !== bff.startPage) {
        for (var i= 0, len = bff.redirect.length; i < len; i++) {
            if (hashUrl.toLowerCase() === bff.redirect[i].old.toLowerCase()) {
                hashUrl = bff.redirect[i].new;
                window.location.hash = hashUrl;
            }
        }
    }


    // Adding a random query string to the URL to
    // force reload the page instead of offering the cached version
    var randomString = parseInt(Math.random(1) * 100);
    // Only add the random query string if the URL starts with a hash e.g. #/page.html
    if (hashUrl.indexOf('#/') >= 0) {
        // Pull out the actual URL
        // (everything after the #/ for the AJAX request)
        hashUrl = hashUrl.substr(2) + '?' + randomString;
        // console.log('hashUrl = ' + hashUrl); //DEBUGGING ONLY
    }

    //Load the view into the page
    $.get(hashUrl, function(hashUrlData) {
        $('.bff-view').html(hashUrlData).trigger('pageRenderComplete');
        $('.page-load.page-busy').slideUp(300);
    }).fail(function() {
        $('.page-load.page-busy').slideUp(300);
        $('.page-load.page-error').slideDown(300);
    });


    // Once the view has loaded,
    // perform any additional functions
    $('.bff-view').on('pageRenderComplete', function(event) {

        //Populate the <title> tag
        window.document.title = $('.bff-view').find('title').text();
        jQuery('html,body').animate({scrollTop:0}, 0);

        //console.log(location.hash);  //DEBUGGING ONLY

        //Load any includes and nested includes
        bff.Inception();

        // Changing href="#" into javascript:;
        // if event.preventDefault() fails (which seems to happen randomly)
        $('a[href="#"]').each(function() {
            $(this).attr('href','javascript:;');
        });


    });
};


// ------------------ BFF On Page Load ------------------
//      Let's put everything together. Magic.
// ------------------------------------------------------
$(document).ready(function() {

    bff.loadBffTemplates();

    $('.page-load').hide();

    $(window).on('hashchange', function() {
        bff.hashChanged();
    });

    bff.hashChanged();

    bff.devModeLink();

});