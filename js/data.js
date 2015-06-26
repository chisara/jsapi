$(function (){
//////////////////////////////////////////////////////////////////////////////
// Data
//////////////////////////////////////////////////////////////////////////////

var data = {

  menu:[{

    name: "Start Here.",
    link: '0',
    sub: [{
      name: "Render Viz",
      color: "#231F20",
      describe: "To begin, you MUST render a viz. So, start here.",
      link: '0-0',
      sub: null,
    },{
      name: "Render Viz with more Options",
      color: "#231F20",
      describe: "Render a viz with a filter and parameter selection in place",
      link: '0-1',
      sub: null,
    }]
  },{

    name: "Viz Class",
    link: '1',
    sub: [{
      name: "Dispose viz",
      color: "#002261",
      describe: "Clear out the current viz being displayed",
      link: '1-0',
      sub: null,
    },{
      name: "Download Workbook",
      color: "#002261",
      describe: "Download the workbook you are viewing",
      link: '1-1',
      sub: null,
    },{
      name: "Export Crosstab",
      color: "#002261",
      describe: "Broken in b7: Doesn't allow an export of a worksheet inside a dashboard like it should",
      link: '1-2',
      sub: null,
    },{
      name: "Export Data",
      color: "#002261",
      describe: "Launches View Data dialog for 'Sales by Date' view",
      link: '1-3',
      sub: null,
    },{
      name: "Export Image",
      color: "#002261",
      describe: "Exports the the active sheet as an image",
      link: '1-4',
      sub: null,
    },{
      name: "Export PDF",
      color: "#002261",
      describe: "Exports the the active sheet as as a PDF",
      link: '1-5',
      sub: null,
    },{
      name: "Hide Viz",
      color: "#002261",
      describe: "If a viz has been rendered and is currently visible, hide it",
      link: '1-6',
      sub: null,
    },{
      name: "Pause automatic updates",
      color: "#002261",
      describe: "Pause automatic updates - just like on the toolbar",
      link: '1-7',
      sub: null,
    },{
      name: "Refresh Data",
      color: "#002261",
      describe: "Refresh Data - just like on the toolbar",
      link: '1-8',
      sub: null,
    },{
      name: "Resume automatic updates",
      color: "#002261",
      describe: "Resume updates - just like on the toolbar",
      link: '1-9',
      sub: null,
    },{
      name: "Revert All",
      color: "#002261",
      describe: "Revert the viz - just like on the toolbar",
      link: '1-10',
      sub: null,
    },{
      name: "Set frame size",
      color: "#002261",
      describe: "Change the frame size (to a smaller size, in this case)",
      link: '1-11',
      sub: null,
    },{
      name: "Show share dialog",
      color: "#002261",
      describe: "Make the Share Dialog appear",
      link: '1-12',
      sub: null,
    },{
      name: "Show Viz",
      color: "#002261",
      describe: "If a viz and rendered but hidden, show it",
      link: '1-13',
      sub: null,
    },{
      name: "Toggle automatic updates",
      color: "#002261",
      describe: "Toggle automatic updates - like on the Toolbar",
      link: '1-14',
      sub: null,
    },{
      name: "Viz Property: AreAutomaticUpdatesPaused",
      color: "#002261",
      describe: "Check to see if autoamatic updates are currently paused",
      link: '1-15',
      sub: null,
    },{
      name: "Viz Property: AreToolbarsHidden",
      color: "#002261",
      describe: "Check to see if the Toolbar is hidden",
      link: '1-16',
      sub: null,
    },{
      name: "Viz Property: AreTabsHidden",
      color: "#002261",
      describe: "Check to see if Tabs are hidden",
      link: '1-17',
      sub: null,
    },{
      name: "Viz Property: IsHidden",
      color: "#002261",
      describe: "Is this viz currently hidden?",
      link: '1-18',
      sub: null,
    },{
      name: "Viz Property: IsInteractive",
      color: "#002261",
      describe: "Cut in Beta 8: Is this viz currently interactive?",
      link: '1-19',
      sub: null,
    },{
      name: "Viz Property: ParentElement",
      color: "#002261",
      describe: "What is the parent HTML element into which this viz is embedded",
      link: '1-20',
      sub: null,
    },{
      name: "Viz Property: Url",
      color: "#002261",
      describe: "What is the URL of this viz",
      link: '1-21',
      sub: null,
    },{
      name: "Viz Property: Workbook",
      color: "#002261",
      describe: "Return the Workbook object - message box output won't be interesting",
      link: '1-22',
      sub: null,
    },{
      name: "Activate event listeners",
      color: "#002261",
      describe: "Turn on event listeners. You'll get annoyed after a while",
      link: '1-23',
      sub: null,
    },{
      name: "Deactivate event listeners",
      color: "#002261",
      describe: "Turn off event listeners and enjoy the silence",
      link: '1-24',
      sub: null,
    }]
  },{
    name: "Workbook Class",
    link: '2',
    sub: [{

      name: "Change Parameter Value Async",
      color: "#231F20",
      describe: "Change the paramter 'Top Customers' to show 10 instead of 25",
      link: '2-0',
      sub: null,
    },{

      name: "Revert all async",
      color: "#231F20",
      describe: "Revert changes in this workbook - similar to the same method on the Viz class ",
      link:'2-1',
      sub: null
    },{
      name: "Save as custom view named 'test'",
      color: "#231F20",
      describe: "Please Make some changes to the current dashboard, then click me to save them as a Custom View named 'test' ",
      link:'2-2',
      sub: null
    },{
      name: "Remove custom view 'test'",
      color: "#231F20",
      describe: "If you have created a custom view (above), delete it. Please be kind to the next user and clean up after yourself",
      link:'2-3',
      sub: null
    },{
      name: "Set Active Sheet - Categorical Example",
      color: "#231F20",
      describe: "Switch to the 'Profit by Subcategory' tab. Use me before applying a category filter",
      link:'2-4',
      sub: null
    },{
      name: "Set Active Sheet - Date Period",
      color: "#231F20",
      describe: "Switch to the 'Shipped by Date' tab. Use me before applying a Date Period filter",
      link:'2-5',
      sub: null
    },{
      name: "Set Active Sheet - Range Example",
      color: "#231F20",
      describe: "Switch to the 'Sales by Date' tab. Use me before applying a Range filter",
      link:'2-6',
      sub: null
    },{
      name: "Set Active Sheet - Relative Date",
      color: "#231F20",
      describe: "Switch to the 'Profit by Date' tab. Use me before applying a Relative Date filter",
      link:'2-7',
      sub: null
    },{
      name: "Show custom view 'test'",
      color: "#231F20",
      describe: "Show the Custom View you created earlier",
      link:'2-8',
      sub: null
    },{
      name: "Set active view as default",
      color: "#231F20",
      describe: "Make your 'test' Custom View the default for the currently logged in user",
      link:'2-9',
      sub: null
    },{
      name: "WB Property: ActiveCustomView",
      color: "#231F20",
      describe: "Will show info about a Custom View IF a custom view is currently active",
      link:'2-10',
      sub: null
    },{
      name: "WB Property: ActiveSheet",
      color: "#231F20",
      describe: "Shows information about the current active sheet or dashboard",
      link:'2-11',
      sub: null
    },{
      name: "WB Property: Name",
      color: "#231F20",
      describe: "What is the name of this workbook?",
      link:'2-12',
      sub: null
    },{
      name: "WB Property: Parameters",
      color: "#231F20",
      describe: "Return a collection of parameters that exist in this workbook. This example also counts them.",
      link:'2-13',
      sub: null
    },{
      name: "WB Property: PublishedSheetsInfo",
      color: "#231F20",
      describe: "Get information about the sheets in this dashboard ",
      link:'2-14',
      sub: null
    }]
  },{

    name: "Custom View Class",
    link: '3',
    sub: [{
      name: "Create Custom View",
      color: "#231F20",
      describe: "Create a custom view named 'Test 2' via the Workbook class",
      link: '3-0',
      sub:null
    },{
      name: "Save Custom View",
      color: "#231F20",
      describe: "Saves the 'Test 2' custom view in order to generate a custom URL - Works only directly after 'Create Custom View'",
      link: '3-1',
      sub:null
    },{
      name: "Share Custom View",
      color: "#231F20",
      describe: "'Advertises' the 'Test 2' Custom View as a Shared View",
      link: '3-2',
      sub:null
    },{
      name: "Rename Custom View",
      color: "#231F20",
      describe: "Rename custom view 'Test 2' to 'Renamed Test 2'.",
      link: '3-3',
      sub:null
    },{
      name: "Show Custom View",
      color: "#231F20",
      describe: "Show custom view 'Test2'",
      link: '3-4',
      sub:null
    }]
  },{

    name: "Sheet Class",
    link:'4',
    sub: [{
      name: "Apply Hierarchical Filter",
      color: "#231F20",
      describe: "I am not implemented because this workbook is not connected to a cube and we only get hierarchical filters from cubes",
      link: '4-0',
      sub:null
    },{
      name: "Apply Categorical Filter",
      color: "#231F20",
      describe: "Apply a simple filter to the 'Profit by Subcategory' Sheet",
      link: '4-1',
      sub:null
    },{
      name: "Remove and Add a Categorical Filter",
      color: "#231F20",
      describe: "Remove a value from the filter and add another two. Try this after you apply the simple filter above.",
      link: '4-2',
      sub:null
    },{
      name: "Apply All to Categorical Filter",
      color: "#231F20",
      describe: "Apply 'All' to Categorical Filter.",
      link: '4-3',
      sub:null
    },{
      name: "Apply Range Filter",
      color: "#231F20",
      describe: "Apply a range filter (min - max) to the 'Sales by Date' sheet",
      link: '4-4',
      sub:null
    },{
      name: "Apply Relative Date Filter",
      color: "#231F20",
      describe: "Apply a Relative Date filter to 'Shipped by Date' sheet, changing 'Last 4 Years' to 'Last 376 Days'",
      link: '4-5',
      sub:null
    },{
      name: "Change Size",
      color: "#231F20",
      describe: "Call changeSizeAsync() to change a sheet's (of type 'dashboard') size",
      link: '4-6',
      sub:null
    },{
      name: "Clear Hierarchical Filter",
      color: "#231F20",
      describe: "I'm not implemented b/c this workbook isn't connected to a cube",
      link: '4-7',
      sub:null
    },{

      name: "Clear Categorical",
      color: "#231F20",
      describe: "Clearing filter selections is the same as selecting 'All'.",
      link: '4-8',
      sub:null
    },{
      name: "Clear Range Filter",
      color: "#231F20",
      describe: "Clear Range Filter",
      link: '4-9',
      sub:null
    },{
      name: "Clear Relative Date Filter",
      color: "#231F20",
      describe: "Clear Relative Date Filter",
      link: '4-10',
      sub:null
    },{
      name: "Select Marks Inside Dashboard",
      color: "#231F20",
      describe: "Select some Marks in the scatterplot INSIDE the dashboard",
      link: '4-11',
      sub:null
    },{
      name: "Select Marks",
      color: "#231F20",
      describe: "Select some Marks in the scatterplot - navigate to the 'Profit v. Sales' sheet first.",
      link: '4-12',
      sub:null
    },{
      name: "Select More Marks",
      color: "#231F20",
      describe: "You've already selected 'Technology' marks, now add 'Office Supplies' marks, too",
      link: '4-13',
      sub:null
    },{
      name: "Select Marks using two dimensions",
      color: "#231F20",
      describe: "Clear the previous marks you selected and choose only Technology marks from customers Emily and Deborah",
      link: '4-14',
      sub:null
    },{
      name: "Clear Marks",
      color: "#231F20",
      describe: "Clear the previous marks you selected",
      link: '4-15',
      sub:null
    },{
      name: "Sheet Property: DataSources",
      color: "#231F20",
      describe: "Get DataSource associated with a worksheet",
      link: '4-16',
      sub:null
    },{
      name: "Sheet Property: Index",
      color: "#231F20",
      describe: "The index of sheet within the workbook (zero-based)",
      link: '4-17',
      sub:null
    },{
      name: "Sheet Property: IsActive",
      color: "#231F20",
      describe: "Indicates whether a sheet is currectly active",
      link: '4-18',
      sub:null
    },{
      name: "Sheet Property: IsHidden",
      color: "#231F20",
      describe: "Are any sheets shown in the dashboard hidden in the workbook itself?",
      link: '4-19',
      sub:null
    },{
      name: "Sheet Property: Name",
      color: "#231F20",
      describe: "Find the current active sheet in the workbook, then display its name",
      link: '4-20',
      sub:null
    },{
      name: "Sheet Property: Objects",
      color: "#231F20",
      describe: "Use this to retrieve the items found in a sheet of type DASHBOARD. Play with the Dashboard class methods for better examples",
      link: '4-21',
      sub:null
    },{
      name: "Sheet Property: ParentDashboard",
      color: "#231F20",
      describe: "Identity the parent dashboard of a worksheet nested within another sheet of type 'Dashboard'",
      link: '4-22',
      sub:null
    },{
      name: "Sheet Property: Selected Marks",
      color: "#231F20",
      describe: "Switch to the 'Profit v. Sales' tab, choose *a few* marks, then use this method to see what you selected",
      link: '4-23',
      sub:null
    },{
      name: "Sheet Property: Sheet Type",
      color: "#231F20",
      describe: "Is the active sheet of type 'Sheet' or 'Dashboard'",
      link: '4-24',
      sub:null
    },{
      name: "Sheet Property: Sheet Size",
      color: "#231F20",
      describe: "Check the size behavior and min/max size settings of active sheet",
      link: '2-25',
      sub:null
    },{
      name: "Sheet Property: Workbook",
      color: "#231F20",
      describe: "What workbook does the current sheet belong to?",
      link: '4-26',
      sub:null
    }]
  },{

    name: "Data Source Class",
    link:'5',
    sub: [{
      name: "Get Data Source",
      color: "#231F20",
      describe: "Get the Data Source associated with a sheet of type Worksheet",
      link: '5-0',
      sub:null
    },{
      name: "Fetch Fields",
      color: "#231F20",
      describe: "Iterate through the fields in the data source",
      link: '5-1',
      sub:null
    },{
      name: "Data Source Property: IsPrimary",
      color: "#231F20",
      describe: "In cases of blending, is this the primary data source?",
      link: '5-2',
      sub:null
    },{
      name: "Date Source Property: Name",
      color: "#231F20",
      describe: "Name of this data source",
      link: '5-3',
      sub:null
    }]
  },{

    name: "Dashboard Class",
    link:'6',
    sub: [{
      name: "Get Dashboard Objects",
      color: "#231F20",
      describe: "Get the Data Source associated with a sheet of type Worksheet",
      link: '6-0',
      sub:null
    },{
      name: "Get Worksheets",
      color: "#231F20",
      describe: "Retreives an array of Worksheets which live in the dashboard",
      link: '6-1',
      sub:null
    }]
  },{


    name: "Story Class",
    link:'7',
    sub: [{      

      name: "activateStoryPointAsync()",
      color: "#231F20",
      describe: "Activates the StoryPoint at the specified index",
      link: '7-0',
      sub:null,
    },{

      name: "activateNextStoryPointAsync()",
      color: "#231F20",
      describe: "Activates the next StoryPoint if one exists. Ignored if currently active StoryPoint is also the last one",
      link: '7-1',
      sub:null,
    },{

      name: "activatePreviousStoryPointAsync()",
      color: "#231F20",
      describe: "Activates the previous StoryPoint if one exists. Ignored if currently active StoryPoint is also the first one",
      link: '7-2',
      sub:null,
    },{

      name: "revertStoryPointAsync()",
      color: "#231F20",
      describe: "Reverts the StoryPoint at the specified index",
      link: '7-3',
      sub:null,
    },{

      name: "changeSizeAsync() - Story",
      color: "#231F20",
      describe: "Resizes the current Story",
      link: '7-4',
      sub:null,
    },{

      name: "Story Property: Name",
      color: "#231F20",
      describe: "Use getName() to retreive the name of the Story (sheet)",
      link: '7-5',
      sub:null,
    },{

      name: "Story Property: Index",
      color: "#231F20",
      describe: "The index of Story within the workbook (zero-based)",
      link: '7-6',
      sub:null,
    },{

      name: "Story Property: isActive",
      color: "#231F20",
      describe: "Indicates whether a Story is currectly active",
      link: '7-7',
      sub:null,
    },{

      name: "Story Property: isHidden",
      color: "#231F20",
      describe: "Are any sheets shown in the Story hidden in the workbook itself?",
      link: '7-8',
      sub:null,
    },{

      name: "Story Property: Story Type",
      color: "#231F20",
      describe: "Returns the type of the sheet - should specify 'Story'",
      link: '7-9',
      sub:null,
    },{

      name: "Story Property: Story Size",
      color: "#231F20",
      describe: "Check the size behavior and min/max size settings of active Story",
      link: '7-10',
      sub:null,
    },{

      name: "Story Property: Url",
      color: "#231F20",
      describe: "Get the URL of this Story",
      link: '7-11',
      sub:null,
    },{

      name: "Story Property: Workbook",
      color: "#231F20",
      describe: "Gets the workbook to which this Story belongs",
      link: '7-12',
      sub:null,
    },{

      name: "Story Property: StoryPointsInfo",
      color: "#231F20",
      describe: "Returns an array of StoryPointInfo objects, which represent each story point in a single story",
      link: '7-13',
      sub:null,
    },{

      name: "Story Property: ActiveStoryPoint",
      color: "#231F20",
      describe: "Returns an index of the currently active StoryPoint (zero based) in the active Story",
      link: '7-14',
      sub:null,
    }]
  },{

    name: "StoryPoint Class",
    link: '8',
    sub: [{

      name: "StoryPoint Property - Index",
      color: "#231F20",
      describe: "Returns zero-based position of this StoryPoint within the parent Story sheet",
      link: '8-0',
      sub:null,
    },{

      name: "StoryPoint Property - Caption",
      color: "#231F20",
      describe: "Returns the text description for this StoryPoint",
      link: '8-1',
      sub:null,
    },{

      name: "StoryPoint Property - IsActive",
      color: "#231F20",
      describe: "Indicates whether this is the currently active StoryPoint in the parent Story",
      link: '8-2',
      sub:null,
    },{

      name: "StoryPoint Property - IsUpdated",
      color: "#231F20",
      describe: "Returns 'false' when StoryPoint has been modified but not yet reverted w/ orange revert symbol. Otherwise, returns 'true'.",
      link: '8-3',
      sub:null,
    },{

      name: "StoryPoint Property - ContainedSheet",
      color: "#231F20",
      describe: "Returns the sheet (Dashboard, worksheet) contained by the StoryPoint. Null if the StoryPoint contains neither",
      link: '8-4',
      sub:null,
    },{

      name: "StoryPoint Property - ParentStory",
      color: "#231F20",
      describe: "Returns the Story object which contains this StoryPoint",
      link: '8-5',
      sub:null,

    }]
  },{
    name: "StoryPointInfo Class",
    link: '9',
    sub: [{

      name: "StoryPointInfo Property - Index",
      color: "#231F20",
      describe: "Returns zero-based position of this StoryPoint within the parent Story sheet",
      link: '9-0',
      sub:null,
    },{

      name: "StoryPointInfo Property - Caption",
      color: "#231F20",
      describe: "Returns the text description for this StoryPoint",
      link: '9-1',
      sub:null,
    },{

      name: "StoryPointInfo Property - IsActive",
      color: "#231F20",
      describe: "Indicates whether this is the currently active StoryPoint in the parent Story",
      link: '9-2',
      sub:null,
    },{

      name: "StoryPointInfo Property - IsUpdated",
      color: "#231F20",
      describe: "Returns 'false' when StoryPoint has been modified but not yet reverted w/ orange revert symbol. Otherwise, returns 'true'.",
      link: '9-3',
      sub:null,
    },{

      name: "StoryPointInfo Property - ParentStory",
      color: "#231F20",
      describe: "Returns the Story object which contains this StoryPoint",
      link: '9-4',
      sub:null,

    }]
  },{
    name: "Parameter Class",
    link: '10',
    sub: [{

      name: "Get Parameters",
      color: "#231F20",
      describe: "Get the parameters in this workbook",
      link: '10-0',
      sub:null,
    },{

      name: "Parameter Property: CurrentValue",
      color: "#231F20",
      describe: "The current value of the 'Top 25 Customers' parameter",
      link: '10-1',
      sub:null,
    },{

      name: "Parameter Property: DataType",
      color: "#231F20",
      describe: "The data type of the parameter",
      link: '10-2',
      sub:null,
    },{

      name: "Parameter Property: AllowableValuesType",
      color: "#231F20",
      describe: "The type of values the parameter can accept: ALL, LIST, RANGE",
      link: '10-3',
      sub:null,
    },{

      name: "Parameter Property: AllowableValues",
      color: "#231F20",
      describe: "The set of allowable values contained in a LIST or RANGE driven parameter",
      link: '10-4',
      sub:null,
    },{

      name: "Parameter Property: MinimumValue",
      color: "#231F20",
      describe: "Returns minimum allowable value on a RANGE parameter ",
      link: '10-5',
      sub:null,
    },{

      name: "Parameter Property: MaximumValue",
      color: "#231F20",
      describe: "Returns maximum allowable value on a RANGE parameter",
      link: '10-6',
      sub:null,
    },{

      name: "Parameter Property: StepSize",
      color: "#231F20",
      describe: "Returns the step size for RANGE parameters",
      link: '10-7',
      sub:null,
    },{

      name: "Parameter Property: DateStepPeriod",
      color: "#231F20",
      describe: "Returns the period (month, year, etc.) that we will step by - for a DATE RANGE parameters",
      link: '10-8',
      sub:null,
    },{

      name: "Examine Parameter #1",
      color: "#231F20",
      describe: "Examines a DATE parameter using the DateType, DateStepPeriod, StepSize and other properties",
      link: '10-9',
      sub:null,
    },{

      name: "Examine Parameter #2",
      color: "#231F20",
      describe: "Examines a parameter of type string, returns DataType, AllowableValueType, Current,  AllowableValues",
      link: '10-10',
      sub:null,
    },{

      name: "Examine Parameter #3",
      color: "#231F20",
      describe: "Examines a parameter of type Integer, returns DataType, AllowableValueType, Current,  MinimumValue, MaximumValue, AllowableValues",
      link: '10-11',
      sub:null,

    }]
  },{
    name: "Filter Class",
    link: '11',
    sub: [{

      name: "Get Filters",
      color: "#231F20",
      describe: "Get the filters for a specific worksheet - Do this before you use any of the other methods or properties",
      link: '11-0',
      sub:null,
    },{

      name: "Filter Property: Applied Values - #1",
      color: "#231F20",
      describe: "What values are selected in the Category filter for sheet 'Shipped by Date'?",
      link: '11-1',
      sub:null,
    },{

      name: "Filter Property: Field - #1",
      color: "#231F20",
      describe: "Gets information about the database field associated with the Category filter in sheet 'Shipped by Date'",
      link: '11-2',
      sub:null,
    },{

      name: "Filter Property: FieldName - #1",
      color: "#231F20",
      describe: "Returns the field being filtered by the Category filter for sheet 'Shipped by Date'",
      link: '11-3',
      sub:null,
    },{

      name: "Filter Property: FilterType - #1",
      color: "#231F20",
      describe: "Returns the FilterType of the Category filter for sheet 'Shipped by Date'",
      link: '11-4',
      sub:null,
    },{

      name: "Filter Property: IsExcludeMode - #1",
      color: "#231F20",
      describe: "Reflects whether Category filter for sheet 'Shipped by Date' is in 'Exclude' mode",
      link: '11-5',
      sub:null,
    },{

      name: "Filter Property: Worksheet - #1",
      color: "#231F20",
      describe: "Returns the worksheet to which the Category filter is bound",
      link: '11-6',
      sub:null,
    },{


      name: "Filter Property: DomainMinValue - #2",
      color: "#231F20",
      describe: "Returns the minimum allowable value for the Quantitative Filter 'Sales'",
      link: '11-7',
      sub:null,
    },{


      name: "Filter Property: DomainMaxValue - #2",
      color: "#231F20",
      describe: "Returns the maxmimum allowable value for the Quantitative Filter 'Sales'",
      link: '11-8',
      sub:null,
    },{


      name: "Filter Property: MinValue - #2",
      color: "#231F20",
      describe: "Returns the current 'low' value for the Quantitative Filter 'Sales'",
      link: '11-9',
      sub:null,
    },{


      name: "Filter Property: MaxValue - #2",
      color: "#231F20",
      describe: "Returns the current 'high' value for the Quantitative Filter 'Sales'",
      link: '11-10',
      sub:null,
    },{


      name: "Filter Property: IncludeNullValues - #2",
      color: "#231F20",
      describe: "Indicates if NULL values are included in the Quantitative Filter 'Sales'",
      link: '11-11',
      sub:null,
    },{

      name: "Filter Property: Period - #3",
      color: "#231F20",
      describe: "Returns the Period (Year, Month, etc.) of the  Relative Date Filter 'Ship Date'",
      link: '11-12',
      sub:null,
    },{

      name: "Filter Property: Range - #3",
      color: "#231F20",
      describe: "Returns the range (LAST(N), NEXT(N), CURRENT, TODATE, etc.) of a Relative Date Filter",
      link: '11-13',
      sub:null,
    },{

      name: "Filter Property: RangeN - #3",
      color: "#231F20",
      describe: "Returns the N value from the Range of a Relative Date Filter",
      link: '11-14',
      sub:null,
    },{

      name: "Filter Property: AppliedFieldNames - #4",
      color: "#231F20",
      describe: "Returns a collection of field names set on a Hierarchical filter",
      link: '11-15',
      sub:null,
    }]

  }]
};

 var getMenuItem = function (itemData) {
        var item = $("<li>")
            .append(
        $("<a>", {
            href: '#' + itemData.link,
            html: itemData.name
        }));
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };
    
    var $menu = $("#menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.menu();

});