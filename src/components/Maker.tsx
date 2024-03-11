import React from 'react';

function Maker() {
  return (
    <div className="App container">
      <div className="border border-primary">
        <div className="bg-primary pb-2 px-3">
          <h1 className="text-white">John gets a nne-drag and make a sentence</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <div className="display h4">
            <span className="text-success">1</span><span className="text-success"><i className="fas fa-check"></i></span>
            <span>|</span>
            <span className="text-danger">0</span><span className="text-danger"><i className="fas fa-close"></i></span>
          </div>
          <div>
            <h4>00:33</h4>
          </div>
        </div>
        <div>
          {/* Item 1 */}
          <div className="card border border-secondary-subtle px-3 py-2 mx-3">
            <ul className="d-flex flex-row list-unstyled completed">
              <li>It</li>
              <li>is</li>
              <li>late</li>
              <li>already</li>
            </ul>
            <ul className="d-flex flex-row list-unstyled">
              <li className="border-primary text-primary"><i className="fas fa-camera"></i></li>
              <li>to work</li>
            </ul>
          </div>
          {/* Item 2 */}
          <div className="card border border-secondary-subtle px-3 py-2 mx-3">
            <ul className="d-flex flex-row list-unstyled">
              <li>It</li>
              <li>is</li>
              <li>late</li>
              <li>already</li>
            </ul>
            <ul className="d-flex flex-row list-unstyled">
              <li className="bg-primary text-white border-primary"><i className="fas fa-camera"></i></li>
              <li>to work</li>
            </ul>
          </div>
          {/* Item 3 */}
          <div className="card border border-secondary-subtle px-3 py-2 mx-3">
            <ul className="d-flex flex-row list-unstyled incomplete">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            <ul className="d-flex flex-row list-unstyled">
              <li className="border-primary text-primary"><i className="fas fa-camera"></i></li>
              <li>to work</li>
            </ul>
          </div>
          {/* Item 4 */}
          <div className="card border border-secondary-subtle px-3 py-2 mx-3">
            <ul className="d-flex flex-row list-unstyled incomplete">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
            <ul className="d-flex flex-row list-unstyled">
              <li className="border-primary text-primary"><i className="fas fa-camera"></i></li>
              <li>to work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maker;