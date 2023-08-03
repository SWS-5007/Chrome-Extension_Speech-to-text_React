API methods:
• log user into Boundless
POST
/api/signin/
{
"email": "user@email.com",
"password": "password"
}
Success response:
{
"token":"bearer token"
}

    2-fa enabled response:
    {
        "token":"uuid",
        "tfa_mode":"google_authenticator"
    }

• complete 2-fa login
POST
/api/signin/2fa/
{
"token": "uuid", // Acquired from signin call response
"code": "2fa-code" // Acquired from 2-fa app
}
Success response:
{
"token":"bearer token"
}

• list organizations for login:
/api/workspace/{workspace_id}/access-control/saml-target-organization/

• log user into Meraki organization:
/api/workspace/{workspace_id}/access-control/saml-target-organization/{id}/login/
This method return an html form, with full head and body sections. You need to just place that html content in the page, and it will automatically send the request to log the user into Meraki

• list organizations for login (aggregated):
/api/access-control/user-saml-target-organization/

• log user into Meraki organization (same method as above, this one is via aggregated api endpoint, not needing a workspace_id in url path):
/api/access-control/user-saml-target-organization/{id}/login/

• get user acl:
/api/access-control/user-acl/
Without any parameters, sending a get request here with a user's token in the headers will return the aggregated acl for that user
• list workspace acls:
/api/workspace/{workspace_id}/access-control/user-vendor-role/?page_size=0
This method will return all acls defined on the currnet workspace.

• list workspace acls for a specific organization:
/api/workspace/{workspace_id}/access-control/user-vendor-role/?organization_meraki_id={meraki_id}&page_size=0
This method will return all acls defined on the currnet workspace, that provide access to the organization. workspace_id is sent while user is logging in via postmessge, and meraki_id can be extracted from Meraki website
• get preview acl
/api/workspace/{workspace_id}/access-control/user-vendor-role/preview-acl/?user_vendor_roles[]={acl_id}
This method returns a pewiew acl in the same format as the one we set when a normal user logs in. acl_id will be selected from the results of previous api call
