// {% extends 'base.html' %}

// {% block title %}Create ChatRoom{% endblock %}

// {% block content %}
//     <h1>Create New Chat Room</h1>
//     <form method="post">
//         {% csrf_token %}
//         {{ form.as_p }}
//         <button type="submit">Create Chat Room</button>
//     </form>
//     <a href="{% url 'chat_room_list' %}">Back to Chat Room List</a>
// {% endblock %}