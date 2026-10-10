        // <div id="parent">
        //     <div id="child">
        //         <h1>Heading1</h1>
        //     </div>
        // </div>
        
        
        
        const heading = React.createElement('div', {id: 'parent', style:{ color: 'blue' }}, 
            [React.createElement('div', {id: 'child1'},
                [ React.createElement('h1', {}, 'Heading1'),
                React.createElement('h2', {}, 'Heading2')
                ]
            ),
            React.createElement('div', {id: 'child2'},
                [ React.createElement('h1', {}, 'Heading3'),
                React.createElement('h2', {}, 'Heading4')]
        )
        ]
        );
        console.log(heading);
        console.log('from App.js');

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);