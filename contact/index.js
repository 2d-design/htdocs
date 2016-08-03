function check(tag)
{
	var nodes = document.getElementById("feedback").getElementsByTagName(tag);
	var i;
	for (i = 0; i < nodes.length; i++)
	{
	    if ((nodes[i].id !== "nick") && (nodes[i].value === null || nodes[i].value === ""))
		{
			return true;
		}
	}
	return false;
}
function validate()
{
	if (check("input") || check("textarea"))
	{
		alert("All fields are required!");
		return false;
	}
}
