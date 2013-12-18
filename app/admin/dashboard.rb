ActiveAdmin.register_page "Dashboard" do

  menu :priority => 1, :label => proc{ I18n.t("active_admin.dashboard") }

  content :title => proc{ I18n.t("active_admin.dashboard") } do
    # div :class => "blank_slate_container", :id => "dashboard_default_message" do
    #   span :class => "blank_slate" do
    #     span I18n.t("active_admin.dashboard_welcome.welcome")
    #     small I18n.t("active_admin.dashboard_welcome.call_to_action")
    #   end
    # end

    columns do

      # column do
      #   panel "Recent Orders" do
      #     table_for Order.complete.order('id desc').limit(10) do
      #       column("State")   {|order| status_tag(order.state)                                    } 
      #       column("Customer"){|order| link_to(order.user.email, admin_customer_path(order.user)) } 
      #       column("Total")   {|order| number_to_currency order.total_price                       } 
      #     end
      #   end
      # end

      column do
        panel "Places that need uploaded photos" do
          table_for Place.no_photo.order('name asc').each do |place|
            column(:name) {|place| link_to(place.name, edit_admin_place_path(place)) }
          end
        end
      end

    end # columns

    # columns do

    #   column do
    #     panel "ActiveAdmin Demo" do
    #       div do
    #         render('/admin/sidebar_links', :model => 'dashboards')
    #       end

    #       div do
    #         br
    #         text_node %{<iframe src="https://rpm.newrelic.com/public/charts/6VooNO2hKWB" width="500" height="300" scrolling="no" frameborder="no"></iframe>}.html_safe
    #       end
    #     end
    #   end

   # end # columns

    # Here is an example of a simple dashboard with columns and panels.
    #
    # columns do
    #   column do
    #     panel "Recent Posts" do
    #       ul do
    #         Post.recent(5).map do |post|
    #           li link_to(post.title, admin_post_path(post))
    #         end
    #       end
    #     end
    #   end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
