# ASYNC - DEFER - NORMAL

## How HTML Parsing and Script Works

**_NORMAL_**

- HTML parsing starts
  - If any script tag found, **HTML Parsing Paused** and JS Scripts gets downloaded and executes it when it is available then it resumes HTML Parsing.

**ASYNC**

- HTML parsing starts

  - If any script tag found, **HTML Parsing will continue and JS Scripts statrs downloading**, once JS Scripts available **HTML Parsing Paused** and JS Scripts will get executed then it resumes HTML Parsing.
  - HTML parsing and script download will happen parallel when script found.

  **DEFER**

- HTML parsing starts
  - If any script tag found, **HTML Parsing will continue and JS Scripts statrs downloading**, once HTML parsing completed then only JS Scripts will get executed even though the scripts available before HTML parsing completed.
  - HTML parsing and script download will happen parallel when script found.

**_Script tag_**

- We can keep scripts in Head and Body tags before closing them.
- As a web developers, we have to decide where to keep the JS Scripts during the execution.
- If we keep all the script files in head tag itself, it might take more time to show static web page. Only important script can be kept in head which is related to authentication or which are not used in the home page with DEFER attribute.
