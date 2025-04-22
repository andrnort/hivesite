// Dropdown functionality for the sections
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    // Get the parent dropdown menu
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Store original menu HTML to restore when closing all dropdowns
    const originalMenuHTML = dropdownMenu.innerHTML;
    
    // Add click event listener to each dropdown item
    dropdownItems.forEach(item => {
        // Create content for each dropdown type
        const headingText = item.querySelector('h3').textContent.trim().split(' ')[0];
        let dropdownContent = '';
        
        // Initial content (can be customized for each section)
        switch(headingText) {
            case 'By-laws':
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">By-laws <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                            
                        </div>
                    </div>
                `;
                break;
            case 'Board':
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">Board of Directors <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                           
                        </div>
                    </div>
                `;
                break;
            case 'Partner':
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">Partner Involvement <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                           
                        </div>
                    </div>
                `;
                break;
            case 'Membership':
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">Membership <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                            
                        </div>
                    </div>
                `;
                break;
            case 'Sustainability':
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">Sustainability <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                            
                        </div>
                    </div>
                `;
                break;
            case 'History':
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">History <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                           
                        </div>
                    </div>
                `;
                break;
            default:
                dropdownContent = `
                    <div class="dropdown-content-expanded">
                        <h3 class="dropdown-header">${headingText} <span class="close-btn">-</span></h3>
                        <div class="expanded-content">
                            <p>More information coming soon.</p>
                        </div>
                    </div>
                `;
        }
        
        // Add click event to toggle content
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Save the clicked item's content
            const clickedItemHTML = dropdownContent;
            
            // Replace all dropdown items with the expanded content
            dropdownMenu.innerHTML = clickedItemHTML;
            
            // Add event listener to the close button
            const closeBtn = dropdownMenu.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // Restore original menu
                    dropdownMenu.innerHTML = originalMenuHTML;
                    
                    // Reattach event listeners to the restored items
                    attachEventListeners();
                });
            }
        });
    });
    
    // Function to reattach event listeners after restoring the menu
    function attachEventListeners() {
        const newDropdownItems = document.querySelectorAll('.dropdown-item');
        newDropdownItems.forEach(item => {
            const headingText = item.querySelector('h3').textContent.trim().split(' ')[0];
            let dropdownContent = '';
            
            // Get the correct content based on heading
            switch(headingText) {
                case 'By-laws':
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">By-laws <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                               
                            </div>
                        </div>
                    `;
                    break;
                case 'Board':
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">Board of Directors <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                                
                            </div>
                        </div>
                    `;
                    break;
                case 'Partner':
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">Partner Involvement <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                                
                            </div>
                        </div>
                    `;
                    break;
                case 'Membership':
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">Membership <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                                
                            </div>
                        </div>
                    `;
                    break;
                case 'Sustainability':
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">Sustainability <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                                
                            </div>
                        </div>
                    `;
                    break;
                case 'History':
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">History <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                                
                            </div>
                        </div>
                    `;
                    break;
                default:
                    dropdownContent = `
                        <div class="dropdown-content-expanded">
                            <h3 class="dropdown-header">${headingText} <span class="close-btn">-</span></h3>
                            <div class="expanded-content">
                                <p>More information coming soon.</p>
                            </div>
                        </div>
                    `;
            }
            
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownMenu.innerHTML = dropdownContent;
                
                const closeBtn = dropdownMenu.querySelector('.close-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        dropdownMenu.innerHTML = originalMenuHTML;
                        attachEventListeners();
                    });
                }
            });
        });
    }
});