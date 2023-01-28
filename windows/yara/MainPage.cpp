#include "pch.h"
#include "MainPage.h"
#if __has_include("MainPage.g.cpp")
#include "MainPage.g.cpp"
#endif

#include <winrt/Windows.UI.ViewManagement.h> 
#include <winrt/Windows.ApplicationModel.Core.h>  
#include <winrt/Windows.UI.h>  

#include "App.h"

using namespace winrt;
using namespace xaml;

using namespace winrt::Windows::UI;
using namespace winrt::Windows::UI::ViewManagement;
using namespace winrt::Windows::ApplicationModel::Core;

namespace winrt::yara::implementation
{
    MainPage::MainPage()
    {
        InitializeComponent();

        auto currentView = CoreApplication::GetCurrentView();
        auto currentTitleBar = currentView.TitleBar();
        currentTitleBar.ExtendViewIntoTitleBar(true);
        auto app = Application::Current().as<App>();
        ReactRootView().ReactNativeHost(app->Host());
    }
}
