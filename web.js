(function() {

    var currentlyHighlighted = null;

    var projects = $('.dm-project');

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
        parentRow.siblings().find('.dm-project').css('opacity', '0.5');

        // Get the project id.
        var projectId = null;
        var classes = project.attr('class').split(/\s+/)
        for (var i in classes) {
            // Hacky but who cares.
            if (classes[i] !== 'dm-project') {
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

        // Delegate to the appropriate function.
        highlightProject[projectId](project);
    };

    var reset = function(ev) {

        // Collapse them all.
        $('.dm-project').css('width', '');
        $('.dm-project').css('opacity', '');
        $('.dm-projects-row').css('height', '');

        // Restore to the default the currently highlighted one.
        if (currentlyHighlighted !== null) {
            var project = $('.dm-' + currentlyHighlighted.projectId);

            project.html(currentlyHighlighted.defaultHTML);
            currentlyHighlighted = null;
        }
    };

    var highlightProject = {
        moodle: function(project) {
            project.find('.dm-project-content').html('asdasd');
        },
        eatthisone: function(project) {
            project.find('.dm-project-content').html('asdasd');
        },
        vimide: function(project) {
            project.find('.dm-project-content').html('asdasd');
        },
        badassquest: function(project) {
            project.find('.dm-project-content').html('asdasd');
        }
    };

    projects.on('mouseenter', expand);
    projects.on('click', expand);
    projects.on('mouseleave', reset);
})();
