/*\
 * 
 * 
\*/

//
var SCOPES = ['https://www.googleapis.com/auth/tasks'];

//
function init() 
{
    //
    gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: SCOPES.join(' '),
        immediate: true
    }, handleAuthResult);
}

//
function handleAuthResult(authResult) 
{        
    // registred user load api
    if (authResult && !authResult.error) {
        UIkit.modal('#signin').hide();
        loadGoogleTasksApi();  
    } 
    
    // not registred guess to sign in
    else 
    {
        UIkit.modal('#signin').show();
    }
}

//
function handleAuthClick(event) 
{
    //
    gapi.auth.authorize({
        client_id: CLIENT_ID, 
        scope: SCOPES, 
        immediate: false
    }, handleAuthResult);
  
    //
    return false;
}

//
function loadGoogleTasksApi() 
{
    gapi.client.load('tasks', 'v1', loadProjects);
}

//
function loadProjects() 
{
    //
    $('#widgets').html('');
    
    //
    var request = gapi.client.tasks.tasklists.list({
        'maxResults': 10
    });

    //
    request.execute(function(resp)
    {
        //
        console.log('loadProjects: ', resp);
        
        //
        var projects = resp.items;
        
        //
        if (projects && projects.length > 0) 
        {
            //
            for (var i = 0; i < projects.length; i++) 
            {                
                //
                loadWidget(projects[i]);
            }
        } 
        
        //
        else
        {
            console.log('No task lists found.');
        }
        
        //
        $('#widgets').append($('#backbones .widget-plus').clone());                
    });
}

//
function loadWidget(project)
{
    //
    var widget = $('#backbones .widget').clone();                

    //
    widget.attr('id', project.id);

    //
    var request = gapi.client.tasks.tasks.list({
        tasklist: project.id,
        maxResults: 10
    });

    //
    request.execute(function(resp)
    {
        //
        var tasks = resp.items;

        //
        if (tasks && tasks.length > 0) 
        {
            //
            for (var i = 0; i < tasks.length; i++) 
            {                
                //
                loadWidgetItem(tasks[i], widget);
            }
        } 
        
        //
        else
        {
            console.log('No tasks found.');
        }
    });

    //
    $('.uk-panel-title', widget).text(project.title);

    //
    $('#widgets').append(widget);
}

//
function loadWidgetItem(task, widget) 
{
    //
    //console.log('task:', task.title);
    
    //
    var widget_item = $('#backbones .widget-item').clone();                
    
    //
    $('.title', widget_item).text(task.title);           
    
    //
    $('.items', widget).append(widget_item);    
}

//
$(document).on('click','.hook-project-create',function()
{
    //
    UIkit.modal.prompt('Project name:', '', function(title)
    {
        var request = gapi.client.tasks.tasklists.insert({
            title: title
        });

        request.execute(function(resp) 
        {
            //console.log(resp);
            loadProjects();
        });
    });        
});

//
$(document).on('click','.hook-project-delete',function(e)
{
    //
    var projectid = $(e.target).parents('.widget').attr('id');
    
    //
    console.log('project delete', projectid);
    
    //
    UIkit.modal.confirm("Are you sure?", function()
    {   
        //
        var request = gapi.client.tasks.tasklists.delete({tasklist:projectid});

        //
        request.execute(function(resp) 
        {            
            loadProjects();
        });
    });    
});

//
$(document).on('click','.hook-project-modify',function(e)
{
    //
    var widget = $(e.target).parents('.widget');
           
    //
    var items_editor = $('#backbones .items-editor').clone();                
    
    //
    $('.items', widget).html(items_editor);
    
    //
    items_editor.focus();
});
