    const ConfigurationManager = (function () {
        let instance;
  
        function createInstance() {
          const configurations = [];
  
          return {
            addConfig: (value) => {
              if (value) {
                configurations.push(value);
              }
            },
            getConfigs: () => configurations,
            resetConfigs: () => configurations.splice(0, configurations.length),
          };
        }
  
        return {
          getInstance: () => {
            if (!instance) {
              instance = createInstance();
            }
            return instance;
          },
        };
      })();
  
      const manager = ConfigurationManager.getInstance();
      const logContainer = document.getElementById("logContainer");
  
      // Add Configuration
      document.getElementById("addConfigButton").addEventListener("click", () => {
        const configValue = prompt("Enter a configuration value:");
        if (configValue) {
          manager.addConfig(configValue);
          alert(`Configuration "${configValue}" added successfully!`);
        }
      });
  
      // View Configurations
      document.getElementById("viewConfigButton").addEventListener("click", () => {
        const configs = manager.getConfigs();
        logContainer.innerHTML = "";
  
        if (configs.length > 0) {
          configs.forEach((config, index) => {
            const configElement = document.createElement("p");
            configElement.textContent = `${index + 1}. ${config}`;
            configElement.classList.add("text-gray-800", "bg-gray-200", "p-2", "rounded");
            logContainer.appendChild(configElement);
          });
        } else {
          logContainer.innerHTML = `<p class="text-gray-500 text-center">No configurations available.</p>`;
        }
      });
  
      // Reset Configurations
      document.getElementById("resetConfigButton").addEventListener("click", () => {
        manager.resetConfigs();
        logContainer.innerHTML = `<p class="text-gray-500 text-center">All configurations have been reset.</p>`;
        alert("All configurations have been cleared!");
      });