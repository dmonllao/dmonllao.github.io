(function() {

    var currentlyHighlighted = null;

    var projects = $('.dm-cell');

    var expand = function(ev) {

        var project = $(this);

        // Reset previous highlighting.
        reset();

        var parentRow = project.parent();

        // Highlight the selected one.
        project.css('width', '300%');
        project.css('opacity', 1);
        parentRow.css('height', '75%');

        // Reduce other's
        // Increase height while decreasing the other row's height.
        parentRow.siblings().css('height', '25%');
        parentRow.siblings().find('.dm-cell').css('opacity', '0.5');

        // Get the project id.
        var projectId = null;
        var classes = project.attr('class').split(/\s+/)
        for (var i in classes) {
            // Hacky but who cares.
            if (classes[i] !== 'dm-cell') {
                // Skip the dm-.
                projectId = classes[i].substring(3);
                break;
            }
        }

        // Store the selected project default content.
        currentlyHighlighted = {
            projectId: projectId,
            defaultHTML: project.html()
        };

        // TODO Delegate to the appropriate function for specific stuff.
        //highlightProject[projectId](project);
    };

    var reset = function(ev) {

        // Collapse them all.
        $('.dm-cell').css('width', '');
        $('.dm-cell').css('opacity', '');
        $('.dm-cells-row').css('height', '');

        // Restore to the default the currently highlighted one.
        if (currentlyHighlighted !== null) {
            var project = $('.dm-' + currentlyHighlighted.projectId);

            project.html(currentlyHighlighted.defaultHTML);
            currentlyHighlighted = null;
        }
    };

    var highlightProject = {
        github: function(project) {
            project.find('.dm-cell-content').html('asdasd');
        },
        twitter: function(project) {
            project.find('.dm-cell-content').html('asdasd');
        },
        linkedin: function(project) {
            project.find('.dm-cell-content').html('asdasd');
        },
        slideshare: function(project) {
            project.find('.dm-cell-content').html('asdasd');
        }
    };

    projects.on('mouseenter', expand);
    projects.on('click', expand);
    projects.on('mouseleave', reset);
})();
