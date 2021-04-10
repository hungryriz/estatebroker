var Columns = React.createClass({

    checkIt: function() {
      this.props.callback(this.props.index, !this.props.checked);
      return;
    },
    render: function() {
      var checkBoxField = this.props.checkboxes,
          checkBoxModule,
          action = this.props.displayActions,
          actionModule;
  
      var header = _.map(this.props.obj, function(column, index) {
        return (<th key={index}>{column.displayName}</th>);
      });
      if(checkBoxField){
        checkBoxModule = <th><input type="checkbox" checked={this.props.checked} onChange={this.checkIt} /></th>
      }
      if(action){
        actionModule = <th>Actions</th>;
      }
  
      return (
          <tr>
            {checkBoxModule}
            {header}
            {actionModule}
          </tr>
      );
    }
  });
  
  var Row = React.createClass({
    getInitialState: function() {
      return {
        checked: false
      };
    },
    checkIt: function(id) {
      this.props.callback(this.props.index, !this.props.checked, id);
      return;
    },
    
    onRowClick: function(){
      //alert('hey');
    },
    render: function() {
      var self = this,
          checkBoxModules,
          actionsModules,
          fields = this.props.visibleColumns,
          id = this.props.obj.id,
          checkBoxFields = this.props.checkboxes,
          actions = this.props.displayActions;
          
          if(checkBoxFields){
              checkBoxModules = <td><input type="checkbox" checked={this.props.checked} onChange={this.checkIt.bind(null, id)} /></td>;
          }
  
          if(actions){
              actionsModules = <td><input type="button" value="Edit" /> <input type="button" value="Delete" /></td>;
          }
  
      return (
        <tr onClick={this.onRowClick}>
          {checkBoxModules}
          {
            _.map(fields, function(item, index) {
              return (<td>{self.props.obj[item]}</td>);
            })
          }
          {actionsModules}
        </tr>
      );
    }
  });
  
  var CustomTable = React.createClass({
    getDefaultProps: function(){
      return {
        selectedRow: []
      }
    },
  
    getInitialState: function() {
      var rowState =[];
      for(var i = 0; i < this.props.rows.length; i++) {
        rowState[i] = false;
      }
      return {
        checkAll: false,
        rowState:rowState
      };
    },
  
    checkRow: function (id, value, selID) {
      var index = this.props.selectedRow.indexOf(selID);
      if(value && index == -1){
        this.props.selectedRow.push(selID)
      }else{
        this.props.selectedRow.splice(index, 1);
      }
      
      this.state.rowState[id] = value;
      if (this.state.checkAll) {
        this.state.checkAll = !this.state.checkAll;
      }
      this.setState({
        rowState: this.state.rowState,
        checkAll: this.state.checkAll
      });
    },
  
    checkAll: function () {
      var rowState =[],
          selectedRows = [],
          checkState = !this.state.checkAll;
  
      for(var i = 0; i < this.state.rowState.length; i++) {
        rowState[i] = checkState;
        if(checkState){
           selectedRows.push(this.props.rows[i].id);        
        }else{
          this.props.selectedRow.length = 0;
        }
  
      }
      this.state.checkAll = checkState;
      this.setState({
        rowState: rowState,
        checkAll: this.state.checkAll
      });
    },
  
    render: function() {
      var self = this,
          displayCheckbox = this.props.displayCheckbox,
          displayActions = this.props.displayActions,
          visibleColumns = _.pluck(this.props.columns, "field");
  
      var rows = _.map(this.props.rows, function( row,index) {
        return (<Row obj={row} index={index} key={row.id} 
                      checked={self.state.rowState[index]} 
                      callback={self.checkRow} 
                      checkboxes={displayCheckbox} 
                      visibleColumns={visibleColumns}
                      displayActions={displayActions} />);
      });
  
      return (
        <div className="table-holder container">
          <table className="table">
            <Columns obj={this.props.columns} 
                      checked={self.state.checkAll} 
                      callback={self.checkAll} 
                      checkboxes={displayCheckbox} 
                      displayActions={displayActions} />
            {rows}
          </table>
        </div>
      );
    }
  });
  
  var columns = [ {'field': 'name', 'displayName':'Name'},
                {'field': 'country', 'displayName':'Country'}]
  var rows = [
    {
      'id' : 101,
      'foo': 'bar',
      'name': 'mohan',
      'country': 'IN'
    },
    {
      'id' : 102,
      'foo': 'baarrrr',
      'name': 'venkat',
      'country': 'US'
    },
    {
      'id' : 103,
      'foo': 'baz',
      'name': 'kunal',
      'country': 'UK'
    }
  ];
   
  React.render(<CustomTable columns={columns} rows={rows} displayCheckbox={true} displayActions={true} inlineForm={true} />, document.getElementById('container'));